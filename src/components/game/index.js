import React, { Component } from 'react';
import Menu from 'components/menu';
import Board from 'components/board';
import Score from 'components/score';
import { LEVEL_PARAMS } from 'const';
import './game.scss';

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function isHidden(card) {
    return card.hidden === true;
}

class Game extends Component {
    state = {
        showMenu: true,
        levelParams: LEVEL_PARAMS.easy,
        timeout: null,
        cards: [],
        preventDefaultClick: false,
        gameOver: null,
        isPlaying: true,
        id: null,
    }

    changeStateOfMenu = (showMenu) => {
        this.setState({ showMenu });
    }

    changeLevelOfGame = (levelParams) => {
        this.setState({ levelParams });
    }

    changeTimeout = (timeout) => {
        this.setState({ timeout: timeout });
    }

    startGame = (level) => {
        this.changeStateOfMenu(false);
        this.changeLevelOfGame(level);
        this.changeTimeout(level.timeout);
        this.generateCards(level.countOfPairs);
        this.start();
    }

    pauseResumeGame = () => {
        const { isPlaying, preventDefaultClick } = this.state;
        this.setState({ 
            isPlaying: !isPlaying,
            preventDefaultClick: !preventDefaultClick,
        });
    }

    generateCards = (countOfPairs) => {
        const cards = [];
        for (let i = 0; i < countOfPairs; i++) {
            const card = {
                title: i,
                frontSide: false,
                hidden: false,
                onClick: true,
            }
            cards.push(card);
            cards.push(card);
        }
        cards.sort(compareRandom);
        this.setState({ cards });
    }

    openCard = (cards, cardIndex) => {
        const newCards = cards.map((item, index) => {
            if (index === cardIndex) {
                return { ...item, frontSide: true };
            } else {
                return item;
            }
        });
        
        this.setState({
            cards: newCards,
        });
        return newCards;
    }

    countOpenedCards = (cards) => {
        const indexes = [];
        cards.forEach((item, index) => {
            if (item.frontSide === true) {
                indexes.push(index);
            };
        })
        return indexes;
    }

    closePair = (cards, indexOfOpenCards) => {
        const newCards = cards.map((item, index) => {
            if (index === indexOfOpenCards[0] || index === indexOfOpenCards[1]) {
                return { ...item, frontSide: false };
            } else {
                return item;
            }
        });
        setTimeout(()=> {
            this.setState({
                cards: newCards,
                preventDefaultClick: false,
            });
        }, 250);
    }

    hidePair = (cards, indexOfOpenCards) => {
        const newCards = cards.map((item, index) => {
            if (index === indexOfOpenCards[0] || index === indexOfOpenCards[1]) {
                return { ...item, frontSide: false };
            } else {
                return item;
            }
        });
        const newCardsWithHiddenCards = cards.map((item, index) => {
            if (index === indexOfOpenCards[0] || index === indexOfOpenCards[1]) {
                return { ...item, frontSide: false, hidden: true };
            } else {
                return item;
            }
        });
        
        
        const gameOver = newCardsWithHiddenCards.every(isHidden) ? 'win' : null;

        setTimeout(() => { 
            this.setState({
                cards: newCards,
            });
            setTimeout(() => { 
                this.setState({
                    cards: newCardsWithHiddenCards,
                    preventDefaultClick: false,
                    gameOver: gameOver,
                    timeout: 0,
                })
            }, 0)
        }, 250);
    }

    checkPair = (cards, renewedCards, indexOfOpenCards) => {
        if (renewedCards[indexOfOpenCards[0]].title === renewedCards[indexOfOpenCards[1]].title) {
            this.hidePair(cards, indexOfOpenCards);
        } else {
            this.closePair(cards, indexOfOpenCards);
        }
    }

    cardClickHandler = (cardIndex) => {
        const { cards } = this.state;
        let renewedCards = [];
        let indexOfOpenCards = this.countOpenedCards(cards);
        if (indexOfOpenCards.length === 2) {
            return false;
        } else {
            renewedCards = this.openCard(cards, cardIndex); 
            indexOfOpenCards = this.countOpenedCards(renewedCards);

            if (indexOfOpenCards.length === 2) {
                this.setState({
                    preventDefaultClick: true,
                })
                this.checkPair(cards, renewedCards, indexOfOpenCards);
            };

        }
    }
    
    isGameLose = () => {
        this.setState({
            gameOver: 'lose',
        })
    }
    clearGameOverState = () => {
        this.setState({
            gameOver: null,
        })
    }
    startAnotherGame = () => {
        this.changeStateOfMenu(true);
        this.clearGameOverState();
    }
    
    stop = () => {
		clearInterval(this.id);
        this.setState({ time : 0 });
    }

    increment = () => {
        let { timeout, isPlaying } = this.state;
        if (timeout > 0 && isPlaying === true) {
            timeout = timeout - 1;
            this.changeTimeout(timeout);
        } else if(isPlaying === false) {
            this.pause();
        } else if (timeout === 0) {
            this.stop();
            this.isGameLose();
		}
    }

    start = () => {
        this.setState({ id : setInterval(this.increment, 1000)});
    }

    pause = () => {
        clearInterval(this.id);
    }
    
	render() {
        const { 
            levelParams, 
            timeout, 
            showMenu, 
            cards, 
            preventDefaultClick,
            isPlaying, 
            gameOver,
        } = this.state;

        return (
            <div className="game">
                {
                    showMenu === true 
                        ? <Menu 
                            startPlay={this.startGame}
                        />
                        : gameOver !== null
                            ? <Score 
                                gameOver={gameOver}
                                startAnotherGame={this.startAnotherGame}
                            />
                            : <Board
                                timeout={timeout}
                                levelParams={levelParams}
                                cards={cards}
                                cardClickHandler={this.cardClickHandler}
                                preventDefaultClick={preventDefaultClick}
                                isPlaying={isPlaying}
                                pauseResumeGame={this.pauseResumeGame}
                            />
                }
            </div>
		)
    }
}

export default Game;
