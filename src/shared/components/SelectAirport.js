import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AirportModel} from '../models/AirportModel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
			<div>
			<InputLabel htmlFor={label}>{label}</InputLabel>
			<Select
				value={selectedAirport}
				onChange={(event) => {
					const airportIndex = this.extractSelectedValue(event);
					this.setState({
						selectedAirport: airportIndex
					});
					onChange(airports[airportIndex]);
				}}
				inputProps={{
					name: 'airport',
					id: 'select-airport',
				}}
			>
			{airports.map((airport, index) => <MenuItem key={airport.id} value={airport.id}>{airport.city}</MenuItem>)}
			</Select>
			</div>
		)}
	}

SelectAirport.propTypes = {
	label: PropTypes.string,
	airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel)),
	onChange: PropTypes.func.isRequired
}
