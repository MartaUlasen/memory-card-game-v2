import React, { PureComponent  } from 'react';
import { withAssets } from 'components/assetsPreloader/context';
import classNames from 'classnames/bind';
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

        const className = classNames({
            card: true,
            'card--flipped': frontSide,
            'card--hidden': hidden,
            'card--clickable': !frontSide && !preventDefaultClick && isPlaying,
        });

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
