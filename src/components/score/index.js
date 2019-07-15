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
                {`You are ${gameOver}!`}
                <button 
                    type="button" 
                    onClick={() => { this.onClickHandler(); }}
                >
                    Start new game?
                </button>
            </div>
		)
    }
}
export default Score;