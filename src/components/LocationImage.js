import React, {Component} from 'react';

class LocationImage extends Component {
    render() {
        const index = this.props.selectedLocationIndex;
        // If index has not been generated yet, return nothing.
        if (index === undefined) return (null);
        const { location, image } = this.props.arrayOfLocations[index];

        return (
            <img src={image} alt={location}/>
        );
    }
}

export default LocationImage;