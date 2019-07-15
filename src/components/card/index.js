import React, { PureComponent  } from 'react';
import './card.scss';

class Card extends PureComponent {
    clickHandler = () => {
        const { card, index, cardClickHandler, preventDefaultClick } = this.props;
        const { frontSide } = card;
        if (!frontSide || !preventDefaultClick){
            cardClickHandler(index);
        }
    }
	render() {
        const { title, frontSide, hidden } = this.props.card;
        let className = 'card';

        if (frontSide) {
            className = 'card card--flipped';
        } else if (hidden) {
            className = 'card card--hidden';
        } else if (!frontSide) {
            className = className + ' card--clickable';
        };
        
        return (
            <li className={className} onClick={this.clickHandler}>
                <div className="card__back"></div>
                <div className="card__face">{title}</div>
            </li>
		)
    }
}
export default Card;