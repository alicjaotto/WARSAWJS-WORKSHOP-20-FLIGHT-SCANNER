import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AirportModel} from "../models/AirportModel";

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
                <span>{label}</span>
                <select
                    autowidth
                    value={selectedAirport}
                    onChange={(event) => {
                        const airportIndex = this.extractSelectedValue(event);
                        this.setState({
                            selectedAirport: airportIndex
                        });
                        onChange(airports[airportIndex]);
                    }}
                 >
                    {airports.map((airport, index) => <option value={airport.id}>{airport.city}</option>)}
                </select>
            </div>
        )}
    }

SelectAirport.propTypes = {
    label: PropTypes.string,
    airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel)),
    onChange: PropTypes.func.isRequired
}
