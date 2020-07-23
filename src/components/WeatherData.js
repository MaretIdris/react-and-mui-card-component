import React, {Component} from 'react';

class WeatherData extends Component {
    render() {
        const index = this.props.selectedLocationIndex;
        // If index has not been generated yet, return nothing.
        if(index === undefined) return (null);
        const { location, tempInC, feelsLike, airQualityIndex} = this.props.arrayOfLocations[index];

        return (
            <div>
                <h1>{location}</h1>
                <p>{tempInC}°C</p>
                <p>{feelsLike}</p>
                <p>Air Quality: {airQualityIndex}</p>
            </div>
        );
    }
}

export default WeatherData;