import React, {Component} from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
    photo: {
        height: 600,
        width: 600,
    }
});

class LocationImage extends Component {
    render() {
        const index = this.props.selectedLocationIndex;
        // If index has not been generated yet, return nothing.
        if (index === undefined) return null;
        const {location, image} = this.props.arrayOfLocations[index];
        const {photo} = this.props.classes;

        return (
            <CardActionArea className="image-container">
                <CardMedia
                    className={photo}
                    image={image}
                    alt={location}/>
            </CardActionArea>
        );
    }
}

/** Since this component is wrapped by `withStyles()` this prop **will** be passed down to it! */
LocationImage.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(LocationImage);