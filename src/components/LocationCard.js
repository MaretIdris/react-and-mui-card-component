import React from 'react';
import WeatherData from "./WeatherData";
import LocationImage from "./LocationImage";
import Card from '@material-ui/core/Card';
import {withStyles} from '@material-ui/core/styles';

const styles = ({
    card: {
        display: 'flex',
        flexDirection: 'row',
    }
});

// If I use stateless functional component, then I pass props as a
// parameter to the component and use props.arrayOfLocations instead
// of using this.props.arrayOfLocations in a class.
const LocationCard = (props) => {
    // If selectedLocationIndex has not been generated yet, return nothing.
    if (props.selectedLocationIndex === undefined) return (null);
    const {card} = props.classes;

    return (
        <Card id="weather-container" className={card}>
            <WeatherData
                arrayOfLocations={props.arrayOfLocations}
                selectedLocationIndex={props.selectedLocationIndex}
            />
            <LocationImage
                arrayOfLocations={props.arrayOfLocations}
                selectedLocationIndex={props.selectedLocationIndex}
            />
        </Card>
    );
}


export default withStyles(styles)(LocationCard);