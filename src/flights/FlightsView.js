import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

export class FlightsView extends Component {
	render() {
		const {onBackClick} = this.props;
		return (
			<div>
				<ol>
					<li>Flight #1</li>
					<li>Flight #2</li>
					<li>Flight #3</li>
				</ol>
				<FlatButton primary onClick={onBackClick} label='Go back'/>
			</div>
		)
	}
}

FlightsView.propTypes = {
	onBackClick: PropTypes.func.isRequired
};
