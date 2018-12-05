import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export class SelectDate extends Component {

	render() {
		const {onChange, label, id} = this.props;

		return (
			<div className="App-body__search-view__select-date">
				<TextField
					id={id}
					label={label}
					onChange={(event) => {
						onChange(event.target.value);
					}}
					type="date"
					InputLabelProps={{
						shrink: true,
					}}
					format={'DD/MM/YYYY'}
				/>
			</div>
		);

	}
}

SelectDate.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
}
