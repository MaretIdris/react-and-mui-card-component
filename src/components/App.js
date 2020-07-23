import React, {Component} from 'react';
import '../css/index.css';
import SelectLocation from "./SelectLocation";
import LocationData from "./LocationData";
import arrayOfLocations from '../data/arrayOfLocations';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayOfLocations,
            selectedLocationIndex: undefined,
        };
    }

    saveLocationIndex = index => {
        this.setState({ selectedLocationIndex: index });
        // console.log(index);
    };


    render() {
        const {arrayOfLocations} = this.state;
        const {selectedLocationIndex} = this.state;

        return (
            <React.Fragment>
                <SelectLocation arrayOfLocations={arrayOfLocations} saveLocationIndex={this.saveLocationIndex}/>
                <LocationData arrayOfLocations={arrayOfLocations} selectedLocationIndex={selectedLocationIndex}/>
            </React.Fragment>
        );
    }
}

//     componentDidMount() {
//         // Take the selected option's position in the array: 0, 1, 2 etc
//         // and set the state's selectedLocation with this number.
//     }
// }

export default App;
