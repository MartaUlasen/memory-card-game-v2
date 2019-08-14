import React, { Component } from 'react';
import MapContainer from 'components/mapContainer';
import {MapStyled} from 'components/mapContainer/style';

class MapWrapper extends Component {
	render() {
        return (
            <MapStyled>
                <MapContainer {...this.props} ></MapContainer>
            </MapStyled>
		)
    }
}
export default MapWrapper;
