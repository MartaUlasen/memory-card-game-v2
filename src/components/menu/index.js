import React, { Component } from 'react';
import { LEVEL_PARAMS } from 'const';
import './menu.scss';

export default class Menu extends Component {
    onClick = (level) => {
        const { startPlay } = this.props;
        startPlay(level);
    }

	render() {
		return (
            <div className="menu">
                <div className="title">Select the difficulty of the game</div>
                <ul className="menu__list">
                    <li className="menu__item">
                        <button className="button" type="button" onClick={() => {this.onClick(LEVEL_PARAMS.easy)}}>Easy</button>
                    </li>
                    <li className="menu__item">
                        <button className="button" type="button" onClick={() => {this.onClick(LEVEL_PARAMS.medium)}}>Medium</button>
                    </li>
                    <li className="menu__item">
                        <button className="button" type="button" onClick={() => {this.onClick(LEVEL_PARAMS.hard)}}>Hard</button>
                    </li>
                </ul>
            </div>
		)
    }
}