import React, { PureComponent } from 'react';
import Card from 'components/card';
import './cardField.scss';

class CardField extends PureComponent {
    constructor(props) {
        super(props);
        this.ratio = null;
    }

	render() {
        const { cards, cardClickHandler, preventDefaultClick } = this.props;
        let className = '';
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;
        this.ratio = clientWidth / clientHeight;

        if (this.ratio < 0.7) {
            className = 'cards cards--4х6';
        } else if (this.ratio > 1.3) {
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