import React from 'react';
import WeatherData from "./WeatherData";
import LocationImage from "./LocationImage";


// If I use stateless functional component, then I pass props as a
// parameter to the component and use props.arrayOfLocations instead
// of using this.props.arrayOfLocations in a class.
const LocationData = (props) => {
    // If selectedLocationIndex has not been generated yet, return nothing.
    if (props.selectedLocationIndex === undefined) return (null);

    return (
        <div id="weather-container">
            <WeatherData
                arrayOfLocations={props.arrayOfLocations}
                selectedLocationIndex={props.selectedLocationIndex}
            />
            <LocationImage
                arrayOfLocations={props.arrayOfLocations}
                selectedLocationIndex={props.selectedLocationIndex}
            />
        </div>
    );
}


export default LocationData;