import React, {Component} from 'react';

// Learn about HTML <select> tag: https://www.w3schools.com/tags/tag_select.asp

class SelectLocation extends Component {
    render() {
        // Destructure state object
        const {arrayOfLocations} = this.props;

        return (
            <div id="select-container">
                <select onChange={(event) => {
                    const index = event.target.value;
                    // Style select dropdown to move on the top of the page after selection has been made.
                    const selectContainer = document.querySelector("#select-container");
                    selectContainer.style.minHeight = "10vh";

                    this.props.saveLocationIndex(index);
                }}>
                    <option disabled selected>Choose a location</option>
                    { // Print out location names from the arrayOfLocations.js file
                        arrayOfLocations.map((location, index) => <option key={index} value={index}>{location.location}</option> )
                    }
                </select>
            </div>
        );
    }
}

export default SelectLocation;