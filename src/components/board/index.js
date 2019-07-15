import React, { Component } from 'react';
import Timer from 'components/timer';
import CardField from 'components/cardField';

class Board extends Component {
	render() {
        const { 
            timeout, 
            changeTimeout, 
            levelParams, 
            cards,
            cardClickHandler,
            preventDefaultClick,
            isGameLose
        } = this.props;
		return (
            <div className="board">
                <Timer 
                    timeout={timeout}
                    changeTimeout={changeTimeout}
                    isGameLose={isGameLose}
                />
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