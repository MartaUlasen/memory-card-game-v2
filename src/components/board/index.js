import React, { Component } from 'react';
import Timer from 'components/timer';
import CardField from 'components/cardField';
import './board.scss';

class Board extends Component {
	render() {
        const {
            assets,
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
                    <Timer 
                        timeout={timeout}
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
                    assets={assets}
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