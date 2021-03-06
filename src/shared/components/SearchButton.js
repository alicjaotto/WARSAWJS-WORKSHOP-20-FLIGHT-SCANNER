import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export class SearchButton extends Component {
	render() {
		const {text, disabled, onClick} = this.props;
		const styles = {
			width: '100%'
		}

		return (
			<Button variant="contained"
				color="primary"
				size="large"
				style={styles}
				onClick={onClick}
				disabled={disabled}>
				{text}
			</Button>
		)
	}
}

SearchButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool.isRequired
};
