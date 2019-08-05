import React from 'react';
import ReactDOM from 'react-dom';
import Game from 'components/game';
import { CARD_IMAGES } from 'const';
import { Loader } from 'react-feather';
import AssetsPreloader from './components/assetsPreloader';
import './index.scss';

ReactDOM.render(
    <AssetsPreloader assets={CARD_IMAGES}>
        {({isLoading, error, assets}) => isLoading
            ? <Loader className="icon-loading" size={30} />
            : <Game assets={assets} />
        }
    </AssetsPreloader>,
    document.getElementById('root')
);
