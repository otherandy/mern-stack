import { Component, React } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    height: '20vh'
};

const defaultLocation = {
    lat: 31.866504322950313,
    lng: -116.59515910595934
};

const defaultZoom = 10;


export default class MyMap extends Component {
    onLoad = map => {
        this.handleChangeLocation(map.center.lat(), map.center.lng());
        map.addListener("dragend", () => {
            this.handleChangeLocation(map.center.lat(), map.center.lng());
        });
    };
    handleChangeLocation(lat, lng) {
        this.props.onLocationChange && this.props.onLocationChange(lat, lng);
    }
    render() {
        return (
            <LoadScript
                googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_API_KEY}`}
            >
                <GoogleMap
                    onLoad={this.onLoad}
                    mapContainerStyle={containerStyle}
                    center={this.props.location || defaultLocation}
                    zoom={defaultZoom}
                    clickableIcons={false}
                    options={{
                        disableDefaultUI: this.props.disableUI,
                        gestureHandling: this.props.gestureHandling,
                    }}
                >
                    <></>
                </GoogleMap>
            </LoadScript>
        )
    }
}
