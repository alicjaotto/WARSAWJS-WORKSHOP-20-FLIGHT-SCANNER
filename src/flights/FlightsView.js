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
		flights: this.props.flights,
		passengers: this.props.passengers
	}

	_getDuration = (flights) => {
		var duration = 0;
		var clocktime;

		if (flights.length === 1) {
			duration = flights[0].length;
		} else {
			flights.forEach((el) => duration += el.length);
		}

		const hrs = Math.floor(duration);
		const min = Math.round((duration - hrs) * 60);

		if (hrs === 0) {
			clocktime = min + 'min';
			return clocktime;
		} else if (min === 0) {
			clocktime = hrs + 'h';
			return clocktime;
		} else {
			clocktime = hrs + 'h' + ' ' + min + 'min';
			return clocktime;
		}
	}

	_getChanges = (flights) => {
		var changes = 'direct';
		if (flights.length === 2) {
			changes = 1 + ' ' + 'change';
			return changes;
		} else if (flights.length >= 3) {
			changes = flights.length - 1 + ' ' + 'changes';
			return changes;
		} else {
			return changes;
		}
	}

	render() {
		const {flights, passengers} = this.state;
		var flights_result = flights.map((flight)=> {
			const {id, price} = flight;
			const durationBack = this._getDuration(flight.inboundPath);
			const changesBack = this._getChanges(flight.inboundPath);
			const durationThere = this._getDuration(flight.outboundPath);
			const changesThere = this._getChanges(flight.outboundPath);

			return(
				<Flight key={id}
					price={price}
					id={id}
					durationThere={durationThere}
					changesThere={changesThere}
					durationBack={durationBack}
					changesBack={changesBack}>
				</Flight>
			)
		})
		return (
			<div className="App-body__flights-view">
				{flights_result}
				<div className="App-body__flights-view__button">
					<Button color="primary"
						onClick={this.onBackClick}>
						new search
					</Button>
				</div>
			</div>
		)
	}
}

FlightsView.propTypes = {
	onBackClick: PropTypes.func.isRequired,
	flights: PropTypes.arrayOf(PropTypes.instanceOf(FlightModel)),
	passengers: PropTypes.number,
};
