import { Component } from 'react';
import Preloader from '@webdeveric/image-preloader';
import { CARD_IMAGES } from 'const';

class AssetsPreloader extends Component {
    state = {
        isLoading: false,
    }
    
    preloadImages = () => {
        let loader = new Preloader( { 
            images: CARD_IMAGES, 
            timeout: 0, 
        } );
        this.setState({ isLoading: true });
        loader.start().then( results => {
            this.setState({ isLoading: false });
        });
    }

    componentDidMount = () => {
        this.preloadImages();
    }

    render() {
        const { isLoading } = this.state;
        return this.props.render(isLoading);
    }
}


export default AssetsPreloader;
