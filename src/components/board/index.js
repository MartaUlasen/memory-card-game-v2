import React, { Component } from 'react';
import Timer from 'components/timer';
import CardField from 'components/cardField';
import './board.scss';

class Board extends Component {
	render() {
        const { 
            timeout, 
            changeTimeout, 
            levelParams, 
            cards,
            cardClickHandler,
            preventDefaultClick,
            isGameLose,
            isPlaying,
            pauseResumeGame,
        } = this.props;
        const buttonTitle = isPlaying ? 'Pause' : "Resume";

		return (
            <div className="board">
                <div className="board__header">
                    <Timer 
                        timeout={timeout}
                        changeTimeout={changeTimeout}
                        isGameLose={isGameLose}
                        isPlaying={isPlaying}
                    />
                    <button 
                        className="button"
                        type="button"
                        onClick={pauseResumeGame}
                    >
                        {buttonTitle}
                    </button>
                </div>
                <CardField 
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