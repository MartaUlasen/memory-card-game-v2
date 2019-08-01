import { Component } from 'react';
import Preloader from '@webdeveric/image-preloader';

class AssetsPreloader extends Component {
    state = {
        isLoading: false,
        assets: [],
    }
    
    preloadImages = () => {
        const { assetUrls } = this.props;

        const loader = new Preloader( { 
            images: assetUrls,
        });
        this.setState({ isLoading: true });
        loader.start().then(assets => {
            this.setState({ isLoading: false, assets: assets.map(a => a.image)});
        });
    }

    componentDidMount = () => {
        this.preloadImages();
    }

    render() {
        const { isLoading, assets } = this.state;
        return this.props.children(isLoading, assets);
    }
}


export default AssetsPreloader;
