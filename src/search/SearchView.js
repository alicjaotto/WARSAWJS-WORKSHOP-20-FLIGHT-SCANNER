import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import {SearchButton} from '../shared/components/SearchButton';
import {AirportModel} from '../shared/models/AirportModel';
import {SelectAirport} from '../shared/components/SelectAirport';
import {AirportService} from '../shared/services/AirportService';
import {SelectDate} from '../shared/components/SelectDate';


export class SearchView extends Component {

	state = {
		airportFrom: null,
		airportTo: null,
		flightsSearchPending: false,
		departureDate: null,
		returnDate: null,
		passengers: 1
	};

	_selectAirport = (key, airport) => {
		this.setState({
			[key]: airport
		});
	};

	_selectDate = (key, date) => {
		this.setState({
			[key]: date
		});
	};

	_selectPassengers = (number) => {
		this.setState({
			passengers: number
		});
	}

	onSearchPress = () => {
		this.setState({
			flightsSearchPending: true
		}, () => {
			AirportService.fetchFlights(this.state.airportFrom, this.state.airportTo, this.state.departureDate, this.state.returnDate).then(flights => {
				this.setState({
					flightsSearchPending: false
				}, () => this.props.onSearchClick(flights))
			});
		});
	};

	render() {
		const {airports, pending} = this.props;
 		const {airportFrom, airportTo, departureDate, returnDate, passengers, flightsSearchPending} = this.state;
		const SearchButtonActive = !Boolean(airportFrom && airportTo && departureDate && returnDate);

		return (
			<div className="App-body__search-view">
				{!pending &&
				(<div className="App-body__search-view__wrapper">
					<SelectAirport
						label='FROM'
						onChange={(airport) => this._selectAirport('airportFrom', airport)}
						airports={airports}/>
					<SelectAirport
						label='TO'
						onChange={(airport) => this._selectAirport('airportTo', airport)}
						airports={airports}/>
					<SelectDate label='Departure'
						id='departure-date'
						onChange={(date) => this._selectDate('departureDate', date)}/>
					<SelectDate label='Return'
						id='return-date'
						onChange={(date) => this._selectDate('returnDate', date)}/>
					<div className="App-body__search-view__select-passengers">
						<TextField
							id="passengers"
							label="Passengers"
							value={passengers}
							onChange={(event) => this._selectPassengers(event.target.value)}
							type="number"
							InputLabelProps={{
								shrink: true,
							}}
							inputProps={{
								min: 1,
							}}
							margin="none"
							color="secondary"
						/>
					</div>
				</div>
				)}

				{(pending || flightsSearchPending) && <CircularProgress/> }

				{!flightsSearchPending && <div className="App-body__search-view__button"><SearchButton text={`Search flights`} onClick={this.onSearchPress} disabled={SearchButtonActive}/></div>}
			</div>
		)
	}
}

SearchView.propTypes = {
	onSearchClick: PropTypes.func.isRequired,
	airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel)),
};
