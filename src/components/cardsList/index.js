import React, { PureComponent } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import CardsListHeader from 'components/cardListHeader';
import MapWrapper from 'components/mapWrapper';
import Item from 'components/cardListItem';
import {StyledcardList, Wrapper, CardDescription, CardSubstrate, List} from './style';

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
        const { data } = this.props;
        return (
            <StyledcardList>
                <CardsListHeader />
                <Wrapper>
                    <CardDescription>
                        <Scrollbars style={{ width: "100%", height: "100%" }}>
                            <List >
                                {data.map((item, index) => {
                                    const { currentCardIndex } = this.state;
                                    return (
                                        <Item 
                                            currentCardIndex={currentCardIndex}
                                            index={index}
                                            key={index} 
                                            setCurrentCard={this.setCurrentCard}
                                            item={item}
                                        >
                                        </Item>
                                    )
                                })}
                            </List>
                        </Scrollbars>
                        <CardSubstrate />
                    </CardDescription>
                    <MapWrapper {...this.state}/>
                </Wrapper>
            </StyledcardList>
		)
    }
}
export default CardsList;
