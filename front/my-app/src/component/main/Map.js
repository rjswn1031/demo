import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import '../../css/main.css'

function Map(props) {
    const center = {
        lat: 36.336396,
        lng: 127.398635,
        zoom: 13
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY
    })
    
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);
        // setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

      

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        </GoogleMap>
    ) : <></>
}

export default Map;