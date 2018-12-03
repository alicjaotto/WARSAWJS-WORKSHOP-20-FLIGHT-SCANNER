import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Flight} from '../flights/Flight';
import Button from '@material-ui/core/Button';
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
			const {id, price} = flight;

			return(
				<Flight key={id} price={price} id={id} index={index+1}></Flight>
			)
		})
		return (
			<div>
				<ul>
					{flights_result}
				</ul>
				<Button color="primary" onClick={this.onBackClick}>Go back</Button>
			</div>
		)
	}
}

FlightsView.propTypes = {
	onBackClick: PropTypes.func.isRequired,
	flights: PropTypes.arrayOf(PropTypes.instanceOf(FlightModel))
};
