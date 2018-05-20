import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SearchButton} from "../shared/components/SearchButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import {AirportModel} from "../shared/models/AirportModel";

export class SearchView extends Component {
    render() {
        const {onClick, airports} = this.props;
        return (
            <div>
                <div>
                    <SelectField
                        value={''}
                        onChange={this.handleChange}
                        floatingLabelText="From"
                     >
                        {airports.map(airport => <MenuItem key={airport.id} value={airport.city}>{airport.city}</MenuItem>)}
                    </SelectField>
                    <SelectField
                        value={''}
                        onChange={this.handleChange}
                        floatingLabelText="To"
                     >
                        {airports.map(airport => <MenuItem key={airport.id} value={airport.city}>{airport.city}</MenuItem>)}
                    </SelectField>
                </div>

                <SearchButton text={`Search flights`} onClick={onClick}/>
            </div>
        )
    }
}

SearchView.propTypes = {
    onClick: PropTypes.func.isRequired,
    airports: PropTypes.arrayOf(PropTypes.instanceOf(AirportModel))
};
