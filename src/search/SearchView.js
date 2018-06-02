import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircularProgress from 'material-ui/CircularProgress';
import {SearchButton} from "../shared/components/SearchButton";
import {AirportModel} from "../shared/models/AirportModel";
import {SelectAirport} from "../shared/components/SelectAirport";
import {AirportService} from "../shared/services/AirportService";

export class SearchView extends Component {

	state = {
		airportFrom: null,
		airportTo: null,
		flightsSearchPending: false
	};

	_selectAirport = (key, airport) => {
		this.setState({
			[key]: airport
		}, () => {console.log(this.state)});
	};

	onSearchPress = () => {
		this.setState({
			flightsSearchPending: true
		}, () => {
			AirportService.fetchFlights(this.state.airportFrom, this.state.airportTo).then(flights => {
				this.setState({
					flightsSearchPending: false
				}, () => this.props.onSearchClick(flights))
			});
		});
	};


	render() {
		const {airports, pending} = this.props;
 		const {airportFrom, airportTo, flightsSearchPending} = this.state;
		const FieldSelected = !Boolean(airportFrom && airportTo);
		return (
			<div>
				{!pending &&
				(<div>
					<SelectAirport
						label={'FROM'}
						onChange={(airport) => this._selectAirport('airportFrom', airport)}
						airports={airports}/>
					<SelectAirport
						label={'TO'}
						onChange={(airport) => this._selectAirport('airportTo', airport)}
						airports={airports}/>
				</div>)}

				{(pending || flightsSearchPending) && <CircularProgress/> }

				{!flightsSearchPending && <SearchButton text={`Search flights`} onClick={this.onSearchPress} disabled={FieldSelected}/>}
			</div>
		)
	}
}

SearchView.propTypes = {
	onSearchClick: PropTypes.func.isRequired,
	airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel)),
};
