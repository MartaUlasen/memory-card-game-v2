import React, { Component } from 'react';
import MapContainer from 'components/mapContainer';
import {MapStyled} from './style';

class MapWrapper extends Component {
	render() {
        return (
            <MapStyled>
                <MapContainer {...this.props}></MapContainer>
            </MapStyled>
		)
    }
}
export default MapWrapper;
