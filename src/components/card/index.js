import React, { PureComponent  } from 'react';
import { withAssets } from 'components/assetsPreloader/context';
import './style.scss';

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
        let className = 'card';

        if (frontSide) {
            className = 'card card--flipped';
        } else if (hidden) {
            className = 'card card--hidden';
        } else if (!frontSide && !preventDefaultClick && isPlaying) {
            className = className + ' card--clickable';
        };

        return (
            <li className={className} onClick={this.clickHandler}>
                <div className="card__back"></div>
                <div className="card__face">
                    {<img className="card__image" src={assets[title].src} alt=""/>}
                </div>
            </li>
        )
    }
}

export default withAssets(Card);
