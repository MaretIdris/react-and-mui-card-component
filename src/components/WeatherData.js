import React, {Component} from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";

class WeatherData extends Component {
    render() {
        const index = this.props.selectedLocationIndex;
        // If index has not been generated yet, return nothing.
        if (index === undefined) return null;
        const {location, tempInC, feelsLike, airQualityIndex} = this.props.arrayOfLocations[index];

        return (
            <div className="weather-text-container">
                <CardActionArea className="text-action-area ">
                    <CardContent>
                        <Typography component="h1" variant="h5"
                                    gutterBottom>{location}</Typography>
                        <Typography variant="body2" color="textSecondary"
                                    component="p">- {tempInC}°C</Typography>
                        <Typography variant="body2" color="textSecondary"
                                    component="p">- {feelsLike}</Typography>
                        <Typography variant="body2" color="textSecondary"
                                    component="p">- Air
                            Quality: {airQualityIndex}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn more</Button>
                </CardActions>
            </div>
        );
    }
}

export default WeatherData;