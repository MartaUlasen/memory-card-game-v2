import React, { PureComponent } from 'react';
import Card from 'components/card';
import './cardField.scss';
import AssetsContext from 'context/assetsContext';

class CardField extends PureComponent {
    static contextType = AssetsContext;
	render() {
        const { cards, cardClickHandler, preventDefaultClick, isPlaying } = this.props;
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
                        <AssetsContext.Consumer key={index}>
                            {(value) => (
                                <Card
                                    asset={value[item.title]}
                                    index={index}
                                    card={item}
                                    isPlaying={isPlaying}
                                    cardClickHandler={cardClickHandler}
                                    preventDefaultClick={preventDefaultClick}
                            /> 
                            )}
                        </AssetsContext.Consumer>
                    )
                })}
            </ul>
		)
    }
}
export default CardField;
