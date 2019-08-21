import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Info} from './style';

export class MapContainer extends Component {
	render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        const {
            google,
            styles,
            currentLat, 
            currentLng, 
            currentcardTitle 
        } = this.props;

        return (
            <Map 
                google={google}
                styles={styles}
                mapTypeControl={false}
                zoomControl={false}
                fullscreenControl={false}
                zoom={5}
                style={style}
                initialCenter={{
                    lat: currentLat, 
                    lng: currentLng,
                }}
                center={{
                    lat: currentLat, 
                    lng: currentLng,
                }}
            >
                <Marker
                    title={currentcardTitle}
                    name={currentcardTitle}
                    position={{lat: currentLat, lng: currentLng}}
                />
                <Info>
                    {currentcardTitle}
                </Info>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyAqtYywxGqkXslwlFMVF_CTAkNIUQln0-g')
})(MapContainer);
