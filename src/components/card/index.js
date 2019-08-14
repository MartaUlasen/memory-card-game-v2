import React, { PureComponent  } from 'react';
import { withAssets } from 'components/assetsPreloader/context';
import { CardStyled, CardBack, CardFace, CardImage } from './style';

class Card extends PureComponent {
    clickHandler = () => {
        const { card, index, cardClickHandler, preventDefaultClick, isPlaying } = this.props;
        const { frontSide } = card;
        if (!frontSide && !preventDefaultClick && isPlaying){
            cardClickHandler(index);
        }
    }
	render() {
        const {
            assets,
            isPlaying,
            preventDefaultClick,
            card: { frontSide, hidden, title },
        } = this.props;


        return (
            <CardStyled 
                className="card" 
                onClick={this.clickHandler}
                isPlaying={isPlaying}
                preventDefaultClick={preventDefaultClick}
                frontSide={frontSide}
                hidden={hidden}
            >
                <CardBack></CardBack>
                <CardFace>
                    {<CardImage src={assets[title].src} alt=""/>}
                </CardFace>
            </CardStyled>
        )
    }
}

export default withAssets(Card);
