import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Flight} from '../flights/Flight';
import FlatButton from 'material-ui/FlatButton';
import {FlightModel} from '../shared/models/FlightModel';

export class FlightsView extends Component {

	onBackClick = () => {
		const {onBackClick} = this.props;
		onBackClick();
	}

	state = {
		flights: this.props.flights
	}

	render() {
		const {flights} = this.state;
		var flights_result = flights.map((flight, index) => {
			const {id, price} = flight
			const {number} = index
			return(
				<Flight price={price} id={id} index={number}></Flight>
			)
		})
		return (
			<div>
				<ul>
					{flights_result}
				</ul>
				<FlatButton primary onClick={this.onBackClick} label='Go back'/>
			</div>
		)
	}
}

FlightsView.propTypes = {
	onBackClick: PropTypes.func.isRequired,
	flights: PropTypes.arrayOf(PropTypes.instanceOf(FlightModel))
};
