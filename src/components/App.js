import React, {Component} from 'react';
import '../css/index.css';
import SelectLocation from "./SelectLocation";
import LocationData from "./LocationData";
import arrayOfLocations from '../data/arrayOfLocations';
import {Button} from '@material-ui/core';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

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

    /**
     * Create a new theme that allows the default theme to be overriden.
     * Docs: https://v3.material-ui.com/customization/themes/#muithemeprovider
     */
    myTheme = createMuiTheme({
        palette: {
            primary: purple,
            secondary: green,
        },
        status: {
            danger: 'orange',
        },
        typography: {
            fontFamily: ['Playfair Display'],
        },
    });

    render() {
        const {arrayOfLocations} = this.state;
        const {selectedLocationIndex} = this.state;

        return (
            <MuiThemeProvider theme={this.myTheme}>
                <React.Fragment>
                    <SelectLocation
                        arrayOfLocations={arrayOfLocations}
                        saveLocationIndexFunction={this.saveLocationIndexFunction}
                    />
                    <LocationData arrayOfLocations={arrayOfLocations} selectedLocationIndex={selectedLocationIndex}/>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

//     componentDidMount() {
//         // Take the selected option's position in the array: 0, 1, 2 etc
//         // and set the state's selectedLocation with this number.
//     }
// }

export default App;
