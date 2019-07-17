import React, { PureComponent } from 'react';

class Score extends PureComponent {
    onClickHandler = () => {
        const { startAnotherGame } = this.props;
        startAnotherGame();
    }
	render() {
        const { gameOver } = this.props;
		return (
            <div className="score">
                <div className="title">
                    {`You are ${gameOver}!`}
                </div>
                <button 
                    className="button"
                    type="button" 
                    onClick={() => { this.onClickHandler(); }}
                >
                    Start a new game?
                </button>
            </div>
		)
    }
}
export default Score;