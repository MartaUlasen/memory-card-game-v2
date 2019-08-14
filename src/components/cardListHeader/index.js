import React, { Component } from 'react';
import { BackButton, Icon } from './style';

class CardsListHeader extends Component {
	render() {
        return (
            <div>
                <BackButton to="/" >
                    <Icon  size={24} />
                    Back
                </BackButton>
            </div>
		)
    }
}
export default CardsListHeader;

