import React, { PureComponent } from 'react';
import { withAssets } from 'components/assetsPreloader/context';
import './style.scss';

class CardsList extends PureComponent {
	render() {
        const { data, assets } = this.props;
        
        return (
            <ul className="cards-description">
                {data.map((item, index) => {
                    return (
                        <li className="cards-description-item" key={index}>
                            <img className="cards-description-item__img" src={assets[index].src} alt="" />
                            <div>
                                <span className="cards-description-item__title">{item.title}</span>
                                <div className="cards-description-item__description">{item.description}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
		)
    }
}
export default withAssets(CardsList);
