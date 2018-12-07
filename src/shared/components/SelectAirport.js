import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AirportModel} from '../models/AirportModel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export class SelectAirport extends Component {

	state = {
		selectedAirport: ''
	}

	extractSelectedValue(event) {
		return event.target.value;
	}

	render() {
		const {onChange, airports, label} = this.props;
		const {selectedAirport} = this.state;

		return(
			<div className="App-body__search-view__select-airport">
				<TextField
					id="select-airport"
					placeholder="select airport"
					select
					label={label}
					value={selectedAirport}
					onChange={(event) => {
						const airportIndex = this.extractSelectedValue(event);
						this.setState({
							selectedAirport: airportIndex
						});
						onChange(airports[airportIndex]);
					}}
					InputLabelProps={{
						shrink: true,
					}}
					margin="none">
					{airports.map((airport, index) => <MenuItem key={airport.id} value={airport.id}>{airport.city}</MenuItem>)}
				</TextField>
			</div>
		)}
	}

SelectAirport.propTypes = {
	label: PropTypes.string,
	airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel)),
	onChange: PropTypes.func.isRequired
}
