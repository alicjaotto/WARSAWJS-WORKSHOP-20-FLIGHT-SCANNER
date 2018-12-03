import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export class SearchButton extends Component {
	render() {
		const {text, onClick} = this.props;
		return (
			<Button variant="contained" color="primary" onClick={onClick}>{text}</Button>
		)
	}
}

SearchButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
