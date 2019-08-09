import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Timer from 'components/timer';
import CardField from 'components/cardField';
import './style.scss';

class Board extends Component {
    menuButtonHandler = () => {
        const { stopGame, startAnotherGame } = this.props;
        stopGame();
        startAnotherGame();
    }
	render() {
        const {
            timeout,
            levelParams, 
            cards,
            cardClickHandler,
            preventDefaultClick,
            isPlaying,
            pauseResumeGame,
        } = this.props;

        const buttonTitle = isPlaying ? 'Pause' : "Resume";
        
		return (
            <div className="board">
                <div className="board__header">
                    <div className="board__timer">
                        <Timer 
                            className="board__timer"
                            timeout={timeout}
                        />
                    </div>
                    <NavLink 
                        to="/" 
                        className="board__menu-button button link" 
                        onClick={this.menuButtonHandler}
                        >
                        Menu
                    </NavLink>
                    <button 
                        className="button"
                        type="button"
                        onClick={pauseResumeGame}
                    >
                        {buttonTitle}
                    </button>
                </div>
                <CardField
                    isPlaying={isPlaying}
                    levelParams={levelParams}
                    cards={cards}
                    cardClickHandler={cardClickHandler}
                    preventDefaultClick={preventDefaultClick}
                />
            </div>
		)
    }
}

export default Board;