import React, { PureComponent } from 'react';
import Card from 'components/card';
import './cardField.scss';

class CardField extends PureComponent {
	render() {
        const { cards, cardClickHandler, preventDefaultClick } = this.props;
        let className = '';
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        const ratio = clientWidth / clientHeight;

        if (ratio < 0.7) {
            className = 'cards cards--4х6';
        } else if (ratio > 1.3) {
            className = 'cards cards--8х3';
        } else className = 'cards'
        
		return (
            <ul className={className}>
                {cards.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            index={index}
                            card={item}
                            cardClickHandler={cardClickHandler}
                            preventDefaultClick={preventDefaultClick}
                        />
                    )
                })}
            </ul>
		)
    }
}
export default CardField;
