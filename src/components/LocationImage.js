import React, {Component} from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = ({
    imageStyling: {
        height: 600,
        display: "block",
        /*Add width: 100%; to make image responsive.*/
        width: "100%",
        objectFit: "cover",
        /* https://developer.mozilla.org/en-US/docs/Web/CSS/object-position */
        objectPosition: "center",
        /* max-height: 100vh makes sure that when viewport is smaller than 600px, the image scales down and takes 100vh of space. */
        maxHeight: "100vh",
    }
});

class LocationImage extends Component {
    render() {
        const index = this.props.selectedLocationIndex;
        // If index has not been generated yet, return nothing.
        if (index === undefined) return null;
        const {location, image} = this.props.arrayOfLocations[index];
        const {imageStyling} = this.props.classes;

        return (
            <CardActionArea className="image-container">
                <CardMedia
                    className={imageStyling}
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