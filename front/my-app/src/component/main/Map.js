import { React } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, useJsApiLoader, MarkerClusterer, Marker } from '@react-google-maps/api';

import '../../css/main.css'

Map.propTypes = {
    parkings: PropTypes.array,
};

function Map(props) {
    const containerStyle = {
        width: '100%',
        height: '100%'
    };
      
    const center = {
        lat: 36.336396,
        lng: 127.398635,
        zoom: 13
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLEMAP_API_KEY
    })
    
    /* const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // const bounds = new window.google.maps.LatLngBounds(center);
        // map.fitBounds(bounds);
        // setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []) */

    //===================================================================
    //marker
    const options = {
        imagePath:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
    }

    const onMarkerCilck = (i) => {
        console.log(i)
    }
    //===================================================================

      

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            mapTypeId = 'satellite'
            center={center}
            zoom={13}
            //onLoad={onLoad}
            //onUnmount={onUnmount}
        >
            <MarkerClusterer options={options}>
            {(clusterer) =>
                props.parkings.map((park) => (
                    <Marker 
                        key={park.prkplceNo} 
                        position={{ lat: park.lat, lng: park.lon }} 
                        clusterer={clusterer}
                        onClick= {() => { onMarkerCilck(park.prkplceNo) }}
                        />
                ))
            }
            </MarkerClusterer>
        </GoogleMap>
    ) : <></>
}

export default Map;