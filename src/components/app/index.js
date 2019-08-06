import React, { Component } from 'react';
import GameRouter from 'components/game/gameRouter';
import AssetsPreloader from 'components/assetsPreloader';
import { CARDS } from 'const';
import { Loader } from 'react-feather';

class App extends Component {
	render() {
		return (
			<AssetsPreloader urls={CARDS.map(item => item.src)}>
                {({isLoading, error, assets}) => isLoading
                    ? <Loader className="icon-loading" size={30} />
                    : <GameRouter />
                }
            </AssetsPreloader>
        );
	}
}

export default App;
