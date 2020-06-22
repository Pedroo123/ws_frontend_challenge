import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Card from '../Card/Card';
import './MapsCard.css';
import Place from '@material-ui/icons/Place';

class MapsCard extends React.Component {

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
            onClick={ () => alert("Current Location: \n Jaragua do Sul-SC") } />
        })
    }

    render() {
        const mapStyle = {
            width: '310px',
            height: '160px'
        }
        
        return (
            <Card>
                <h3>Location</h3>
                <div className="map-container">
                    <Map
                        google={this.props.google}
                        zoom={3}
                        style={mapStyle}
                        initialCenter={{lat: -26.483429, lng: 49.0961959 }}
                    >
                    {this.renderMarker()}
                    </Map>
                </div>
                <div className="marker-container">
                    <span className="location-text"> 
                        <span className="icon-container"><Place /></span>
                    Jaragua do Sul - SC
                    </span>
                </div>
            </Card>
        );
    }

}

const GoogleMap = GoogleApiWrapper({
    apiKey: 'AIzaSyDEDhiDFqiSqwBn6fbBd8QJRTQpgKJjYhE'
}) (MapsCard)

export default GoogleMap;