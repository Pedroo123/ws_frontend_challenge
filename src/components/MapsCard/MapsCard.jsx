import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Card from '../Card/Card';

export class MapsCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stores: [
                {latitude: -26.4802391, longitude: -49.1102358},
                {latitude: -26.4542161, longitude: -49.1132532}
            ]
        }
    }

    renderMarker = () => {
        return this.state.stores.map((index, store) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
            onClick={ () => console.log('Clicado') } />
        })
    }

    render() {
        const mapStyle = {
            width: '500px',
            height: '300px'
        }
        
        return (
            <Card>
                <Map
                    google={this.props.google}
                    zoom={6}
                    style={mapStyle}
                    initialCenter={{lat: -26.483429, lng: 49.0961959 }}
                >
                {this.renderMarker()}
                </Map>
            </Card>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDEDhiDFqiSqwBn6fbBd8QJRTQpgKJjYhE'
}) (MapsCard)