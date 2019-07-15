import React, { PureComponent } from 'react';
import Card from 'components/card';
import './cardField.scss';

class CardField extends PureComponent {
	render() {
        const { cards, cardClickHandler, preventDefaultClick } = this.props;
        
		return (
            <ul className="cards">
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