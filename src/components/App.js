import React, {Component} from 'react';
import '../css/index.css';
import SelectLocation from "./SelectLocation";
import LocationCard from "./LocationCard";
import arrayOfLocations from '../data/arrayOfLocations';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


/**
 * Create a new theme that allows the default theme to be overriden.
 * Docs: https://v3.material-ui.com/customization/themes/#muithemeprovider
 */
const theme = createMuiTheme({
    overrides: {
        // Style sheet name
        MuiTouchRipple: {
            // Name of the rule
            child: {
                // Some CSS
                backgroundColor: "orange"
            }
        }
    },
    palette: {
        primary: purple,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
    typography: {
        fontFamily: ['Dancing Script', 'Fjalla One'].join(','),
        fontSize: 17,
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayOfLocations,
            selectedLocationIndex: undefined,
        };
    }

    saveLocationIndexFunction = (index) => {
        this.setState({selectedLocationIndex: index});
    };

    render() {
        const {arrayOfLocations} = this.state;
        const {selectedLocationIndex} = this.state;

        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <SelectLocation
                        arrayOfLocations={arrayOfLocations}
                        saveLocationIndexFunction={this.saveLocationIndexFunction}
                    />
                    <LocationCard arrayOfLocations={arrayOfLocations}
                                  selectedLocationIndex={selectedLocationIndex}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default App;
