import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export class SelectDate extends Component {

	state = {
		selectedDate: ''
	}

	render() {
		const {onChange, label, id} = this.props;
		const {selectedDate} = this.state;

		return (
			<div>
				<TextField
					id={id}
					label={label}
					value={selectedDate}
					onChange={(event) => {
						this.setState({
							selectedDate: event.target.value
						});
						console.log(this.state);
					}}
					type="date"
					InputLabelProps={{
						shrink: true,
					}}
				/>
			</div>
		);

	}
}

SelectDate.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func
}
