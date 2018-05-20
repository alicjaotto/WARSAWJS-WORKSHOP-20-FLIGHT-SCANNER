import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SearchButton} from "../shared/components/SearchButton";
import {AirportModel} from "../shared/models/AirportModel";
import {SelectAirport} from "../shared/components/SelectAirport";

export class SearchView extends Component {

    state = {
        airportFrom: null,
        airportTo: null
    };

    _selectAirport = (key, airport) => {
        this.setState({
            [key]: airport
        }, () => {console.log(this.state)});
    }

    render() {
        const {onClick, airports} = this.props;
        const {airportFrom, airportTo} = this.state;
        return (
            <div>
                <SelectAirport
                    label={'FROM'}
                    onChange={(airport) => this._selectAirport('airportFrom', airport)}
                    airports={airports}/>
                <SelectAirport
                    label={'TO'}
                    onChange={(airport) => this._selectAirport('airportTo', airport)}
                    airports={airports}/>
                <SearchButton text={`Search flights`} onClick={onClick}/>
            </div>
        )
    }
}

SearchView.propTypes = {
    onClick: PropTypes.func.isRequired,
    airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel)),
};
