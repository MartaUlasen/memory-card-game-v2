import React, { Component } from 'react';
import Timer from 'components/timer';
import CardField from 'components/cardField';
import { Button } from 'style';
import { StyledBoard, Header, BoardTimer, MenuButton } from './style';

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
            <StyledBoard>
                <Header>
                    <BoardTimer>
                        <Timer timeout={timeout} />
                    </BoardTimer>
                    <MenuButton 
                        to="/"
                        onClick={this.menuButtonHandler}
                        >
                        Menu
                    </MenuButton>
                    <Button
                        type="button"
                        onClick={pauseResumeGame}
                    >
                        {buttonTitle}
                    </Button>
                </Header>
                <CardField
                    isPlaying={isPlaying}
                    levelParams={levelParams}
                    cards={cards}
                    cardClickHandler={cardClickHandler}
                    preventDefaultClick={preventDefaultClick}
                />
            </StyledBoard>
		)
    }
}

export default Board;