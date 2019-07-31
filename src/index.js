import React from 'react';
import ReactDOM from 'react-dom';
import Game from 'components/game';
import { Loader } from 'react-feather';
import AssetsPreloader from './components/assetsPreloader';
import './index.scss';

ReactDOM.render(
    <AssetsPreloader render={isLoading =>
        isLoading
        ? <Loader className="icon-loading" size={30} />
        : <Game />
    } />, 
    document.getElementById('root')
);
