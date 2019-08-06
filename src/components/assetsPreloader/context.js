import React from 'react';

const Context = React.createContext([]);

export const withAssets = (WrappedComponent) => {
    const AssetsContextConsumer = (props) => {
        return (
            <Context.Consumer>
                {(assets) => <WrappedComponent {...props} assets={assets} />}
            </Context.Consumer>
        )
    }

    return AssetsContextConsumer;
};

export default Context;
