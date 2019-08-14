import React, { Component } from 'react';
import { withAssets } from 'components/assetsPreloader/context';
import {ItemImg, ItemTitle, ItemDescription} from './style';
import {ItemStyled} from 'components/cardListItem/style';

class Item extends Component {
	render() {
        const { item, setCurrentCard, assets, index } = this.props;
		return (
            <ItemStyled
                onClick={() => setCurrentCard(item)}
                currentCardIndex={this.props.currentCardIndex}
                index={this.props.index}
            >
                <ItemImg src={assets[index].src} alt="" />
                <ItemTitle >{item.title}</ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
            </ItemStyled>
		)
    }
}

export default withAssets(Item);