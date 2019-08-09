import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import { Scrollbars } from 'react-custom-scrollbars';
import { withAssets } from 'components/assetsPreloader/context';
import MapContainer from 'components/mapContainer';
import './style.scss';

class CardsList extends PureComponent {
    state = {
        currentCardIndex: null,
        currentLat: null,
        currentLng: null,
        currentcardTitle: null,
    }

    componentDidMount = () => {
        const { data } = this.props;
        this.setCurrentCard(data[0]);
    }

    setCurrentCard = (item) => {
        const { id, lat, lng, title } = item;
        this.setState({
            currentCardIndex: id,
            currentLat: lat,
            currentLng: lng,
            currentcardTitle: title,
        })
    }
	render() {
        const { data, assets } = this.props;
        const style = {
            width: '100%',
        }
        return (
            <div className="cards-list">
                <NavLink to="/" className="cards-list__back-button button link">
                    <ArrowLeft className="cards-list__icon" size={24} />
                    Back
                </NavLink>
                <div className="cards-description-wrapper">
                    <div className="cards-description">
                        <Scrollbars style={{ width: "100%", height: "100%" }}>
                            <ul className="cards-description-list">
                                {data.map((item, index) => {
                                    const { currentCardIndex } = this.state;
                                    const className = currentCardIndex === index 
                                        ? 'cards-description-item cards-description-item--active'
                                        : 'cards-description-item';
                                    
                                    return (
                                        <li 
                                            className={className} 
                                            key={index} 
                                            onClick={() => this.setCurrentCard(item)}
                                        >
                                            <img className="cards-description-item__img" src={assets[index].src} alt="" />
                                            <span className="cards-description-item__title">{item.title}</span>
                                            <div className="cards-description-item__description">{item.description}</div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Scrollbars>

                    </div>
                    <div className="cards-list__map">
                        <MapContainer style={style} {...this.state} />
                    </div>

                </div>
            </div>
		)
    }
}
export default withAssets(CardsList);
