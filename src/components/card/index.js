import React, { PureComponent  } from 'react';
import { CARD_IMAGES } from 'const';
import './card.scss';


class Card extends PureComponent {
    clickHandler = () => {
        const { card, index, cardClickHandler, preventDefaultClick } = this.props;
        const { frontSide } = card;
        if (!frontSide && !preventDefaultClick){
            cardClickHandler(index);
        }
    }
	render() {
        const { preventDefaultClick, card: { frontSide, hidden, title } } = this.props;
        let className = 'card';

        if (frontSide) {
            className = 'card card--flipped';
        } else if (hidden) {
            className = 'card card--hidden';
        } else if (!frontSide && !preventDefaultClick) {
            className = className + ' card--clickable';
        };

        return (
            <li className={className} onClick={this.clickHandler}>
                <div className="card__back"></div>
                <div className="card__face">
                <img className="card__image" src={CARD_IMAGES[title]} alt=""/>
                </div>
            </li>
		)
    }
}
export default Card;