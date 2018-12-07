import React, { Component } from 'react';
import './assets/css/App.css';
import {FlightsView} from './flights/FlightsView';
import {SearchView} from './search/SearchView';
import {AirportService} from "./shared/services/AirportService";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

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
			<MuiThemeProvider theme={theme}>
				<div className="App">
					<header className="App-header">
						<div className="App-header__content">
							<h1 className="App-header__content__title">Welcome to flight search</h1>
							<div className="App-header__content__logo"></div>
						</div>
					</header>
					<div className="App-body">
						{searchViewVisible && <SearchView onSearchClick={this.onSearchClick} airports={airports} pending={airportsPending}/>}
						{!searchViewVisible && <FlightsView flights={flights} onBackClick={this.onBackClick}/>}
					</div>
					<footer className="App-footer">
						App created by <a href="https://github.com/alicjaotto">Alicja Otto</a> with ReactJS & material-ui during #20 WarsawJS workshops
					</footer>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
