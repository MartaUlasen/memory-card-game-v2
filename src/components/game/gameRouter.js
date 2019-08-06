import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from 'components/game';
import CardsList from 'components/cardsList';
import { CARDS } from 'const';

class GameRouter extends Component {
	render() {
		return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Game />}
                />
                <Route
                    exact
                    path="/cards"
                    render={() => <CardsList data={CARDS} />}
                />
            </Switch>
        );
	}
}

export default GameRouter;
