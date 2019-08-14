import React, { PureComponent } from 'react';
import { Title, Button} from 'style';

class Score extends PureComponent {
    onClickHandler = () => {
        const { startAnotherGame } = this.props;
        startAnotherGame();
    }

	render() {
        const { gameOver } = this.props;
		return (
            <div>
                <Title>
                    {`You ${gameOver}!`}
                </Title>
                <Button 
                    className="button"
                    type="button" 
                    onClick={() => { this.onClickHandler(); }}
                >
                    Start a new game?
                </Button>
            </div>
		)
    }
}
export default Score;