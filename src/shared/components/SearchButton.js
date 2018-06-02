import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

export class SearchButton extends Component {
	render() {
		const {text, onClick} = this.props;
		return (
			<RaisedButton primary onClick={onClick} label={text}/>
		)
	}
}

SearchButton.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};
