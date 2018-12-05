import React, { Component } from 'react';
import './App.css';
import {FlightsView} from './flights/FlightsView';
import {SearchView} from './search/SearchView';
import {AirportService} from "./shared/services/AirportService";

class App extends Component {

	state = {
		searchViewVisible: true,
		airportsPending: true,
		airports: [],
		flights: []
	};

	constructor(props) {
		super(props);
		this.onSearchClick = this.onSearchClick.bind(this);
		this.onBackClick = this.onBackClick.bind(this);
	}

	componentDidMount() {
		AirportService.getAirportResources().then(airports => {
			this.setState({
				airportsPending: false,
				airports
			})
		})
	}

	onSearchClick(flights) {
		console.log(flights);
		this.setState({
			searchViewVisible: false,
			flights
		})
	}

	onBackClick() {
		this.setState({
			searchViewVisible: true
		});
	}

	render() {
		const {searchViewVisible, airports, airportsPending, flights} = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to flight search</h1>
					<div className="App-logo"></div>
				</header>
				<div className="App-body">
					{searchViewVisible && <SearchView onSearchClick={this.onSearchClick} airports={airports} pending={airportsPending}/>}
					{!searchViewVisible && <FlightsView flights={flights} onBackClick={this.onBackClick}/>}
				</div>
				<footer className="App-footer">
					App created with ReactJS & material-ui for WarsawJS workshop
				</footer>
			</div>
		);
	}
}

export default App;
