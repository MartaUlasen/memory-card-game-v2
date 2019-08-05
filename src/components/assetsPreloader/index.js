import { Component } from 'react';

const loadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject(new Error(`Failed to load image ${src}`));
        }
    })
}

class AssetsPreloader extends Component {
    state = {
        isLoading: false,
        error: null,
        assets: [],
    }

    preloadImages = () => {
        const { assets } = this.props;
        const assetUrls = assets.map(asset => asset.src);
        
        this.setState({ isLoading: true });

        Promise.all(assetUrls.map(loadImage))
            .then(assets => {
                this.setState({ isLoading: false, assets });
            })
            .catch((error) => {
                this.setState({ error });
            });
    }

    componentDidMount = () => {
        this.preloadImages();
    }

    render() {
        return this.props.children({...this.state});
    }
}


export default AssetsPreloader;
