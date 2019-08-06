import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { LEVEL_PARAMS } from 'const';
import './style.scss';

export default class Menu extends Component {
    buttonLevelHandler = (level) => {
        const { startPlay } = this.props;
        startPlay(level);
    }

    buttonCardsDescriprionHandler = () => {
        const { watchCardsDescription } = this.props;
        watchCardsDescription();
    }

	render() {
		return (
            <div className="menu">
                <div className="title">Select the difficulty of the game</div>
                <ul className="menu__list">
                    <li className="menu__item">
                        <button className="button" type="button" onClick={() => {this.buttonLevelHandler(LEVEL_PARAMS.easy)}}>Easy</button>
                    </li>
                    <li className="menu__item">
                        <button className="button" type="button" onClick={() => {this.buttonLevelHandler(LEVEL_PARAMS.medium)}}>Medium</button>
                    </li>
                    <li className="menu__item">
                        <button className="button" type="button" onClick={() => {this.buttonLevelHandler(LEVEL_PARAMS.hard)}}>Hard</button>
                    </li>
                    <li className="menu__item">
                        <NavLink to="/cards" className="button link" onClick={() => {this.buttonCardsDescriprionHandler()}} >Watch cards description</NavLink>
                    </li>
                </ul>
            </div>
		)
    }
}