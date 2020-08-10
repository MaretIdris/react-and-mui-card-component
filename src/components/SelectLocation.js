import React, {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

/**
 * This example shows how to override the component `SelectLocation` w/ a one-time style override (aka not a part of the "global"
 * theme). The goal is to set the `minWidth` to `200px`.
 *
 * References:
 * - "withStyles()" docs: https://v3.material-ui.com/customization/overrides/#overriding-with-class-names
 * - Learn about HTML <select> tag: https://www.w3schools.com/tags/tag_select.asp
 * - Docs on how to add prop types to a React class: https://reactjs.org/docs/typechecking-with-proptypes.html
 */
class SelectLocation extends Component {
    render() {
        // Destructure props object.
        const {arrayOfLocations} = this.props;

        const handleChange = (event) => {
            const index = event.target.value;
            // Style select dropdown to move on the top of the page after selection has been made.
            const selectContainer = document.querySelector("#select-container");
            selectContainer.style.minHeight = "10vh";
            this.props.saveLocationIndexFunction(index);
        }

        // The prop `classes` comes from `withStyles()`.
        const {foo, bar, baz} = this.props.classes;

        return (
            <div id="select-container">
                <FormControl
                    variant="outlined"
                    className={foo}
                >
                    <InputLabel className={baz}>Choose a location</InputLabel>
                    <Select
                        className={bar}
                        onChange={handleChange}
                        label="Choose a location">
                        {
                            // Print out location names from the arrayOfLocations.js file
                            arrayOfLocations.map(
                                (location, index) => <MenuItem
                                    className={bar} key={index}
                                    value={index}>{location.location}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </div>
        );
    }
}

/** Since this component is wrapped by `withStyles()` this prop **will** be passed down to it! */
SelectLocation.propTypes = {
    classes: PropTypes.object.isRequired,
}

/**
 * Define your style overrides here.
 * 1. Style names doesn't matter. They are just for readability. MUI doesn't
 *    care.
 * 2. Styles don't get passed down to the children components. Make sure to
 *    pass the styles to every child that needs them. Eg. classes.bar in
 *    <Select> and <MenuItem>.
 */
const myStyles = {
    foo: {
        minWidth: 200,
    },
    bar: {
        color: "red",
        fontFamily: ['Fjalla One'].join(","),
    },
    baz: {
        fontFamily: ['Fjalla One'].join(","),
    },
};

/** Wrap the "actual component" w/ the one that Material UI will generate (this passes the props `classes` down).  */
export default withStyles(myStyles)(SelectLocation);