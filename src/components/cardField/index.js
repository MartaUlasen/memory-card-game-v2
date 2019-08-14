import React, { PureComponent } from 'react';
import Card from 'components/card';
import { StyledCardFileld } from './style';
import classNames from 'classnames/bind';

class CardField extends PureComponent {
	render() {
        const { cards, cardClickHandler, preventDefaultClick, isPlaying } = this.props;
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        const ratio = clientWidth / clientHeight;

        const className = classNames({
            cards: true,
            'cards--4х6': ratio < 0.7,
            'cards--8х3': ratio > 1.3,
        });

		return (
            <StyledCardFileld className={className}>
                {cards.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            index={index}
                            card={item}
                            isPlaying={isPlaying}
                            cardClickHandler={cardClickHandler}
                            preventDefaultClick={preventDefaultClick}
                        />
                    )
                })}
            </StyledCardFileld>
		)
    }
}
export default CardField;
