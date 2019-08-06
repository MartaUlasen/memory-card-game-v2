import React, { Component } from 'react';
import Context from './context';

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
        isLoading: true,
        error: null,
        assets: [],
    }

    preloadImages = () => {
        const { urls } = this.props;

        Promise.all(urls.map(loadImage))
            .then(assets => {
                this.setState({ assets });
            })
            .catch((error) => {
                this.setState({ error });
            })
            .finally(() => {
                this.setState({ isLoading: false });
            });
    }

    componentDidMount = () => {
        this.preloadImages();
    }

    render() {
        return (
            <Context.Provider value={this.state.assets}>
                {this.props.children({...this.state})}
            </Context.Provider>
        )
    }
}


export default AssetsPreloader;
