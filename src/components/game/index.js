import React, { Component } from 'react';
import Menu from '../menu';
import './game.scss';

class Game extends Component {
	componentDidMount = () => {
        
	}
	render() {
		return (
            <div className="game">
                <Menu/>
            </div>
		)
    }
}
export default Game;
