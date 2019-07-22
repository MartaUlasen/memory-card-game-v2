import React, { Component } from 'react';
import Preload from 'preload-it';
import Game from 'components/game';
import { Loader } from 'react-feather';
import { CARD_IMAGES } from 'const';

class AssetsPreloader extends Component {
    state = {
        isLoading: true,
    }
    
    preloadImages = () => {
        const prefix = window.location.origin;
        const preload = Preload();
        const srcs = CARD_IMAGES.map(item => prefix+'/'+item);
        console.log(preload, srcs);

        preload.fetch(srcs).then(items => {
            this.setState({ 
                isLoading: false,
            });
        });
    }
    componentDidMount = () => {
        this.preloadImages();
    }


    render() {
        const { isLoading } = this.state;
        return (
            isLoading ? 
            <Loader className="icon-loading" size={30} /> :
            <Game/>
        )
    }
}


export default AssetsPreloader;