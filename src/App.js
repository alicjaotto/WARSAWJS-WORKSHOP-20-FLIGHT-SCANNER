import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FlightsView} from './flights/FlightsView';
import {SearchView} from './search/SearchView';
import {AirportService} from "./shared/services/AirportService";

class App extends Component {

    state = {
        searchViewVisible: true,
        airports: []
    };

    componentDidMount() {
        AirportService.getAirportResources().then(airports => {
            console.log(airports);
            this.setState({
                airports
            })
        })
    }

    constructor(props) {
        super(props);
        this.onSearchClick = this.onSearchClick.bind(this);
        this.onBackClick = this.onBackClick.bind(this);
    }

    onSearchClick() {
        this.setState({searchViewVisible: false}, () => {
            console.log(this.state);
        });
        console.log(this.state);
    }

    onBackClick() {
        this.setState({searchViewVisible: true}, () => {
            console.log(this.state);
        });
        console.log(this.state);
    }

    render() {
        const {searchViewVisible, airports} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to flight-search</h1>
                </header>
                {searchViewVisible && <SearchView onClick={this.onSearchClick} airports={airports}/>}
                {!searchViewVisible && <FlightsView onClick={this.onBackClick}/>}
            </div>
        );
    }
}

export default App;
