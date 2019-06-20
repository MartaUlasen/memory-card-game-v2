import React, { Component } from 'react';
import './menu.scss';

export default class Menu extends Component {
	componentDidMount = () => {
        
	}

	render() {
		return (
            <div className="menu">
                <div className="menu__title">Select the difficulty of the game</div>
                <ul className="menu__list">
                    <li className="menu__item">
                        <button type="button">Easy</button>
                    </li>
                    <li className="menu__item">
                        <button type="button">Medium</button>
                    </li>
                    <li className="menu__item">
                        <button type="button">Hard</button>
                    </li>
                </ul>
            </div>
		)
    }
}