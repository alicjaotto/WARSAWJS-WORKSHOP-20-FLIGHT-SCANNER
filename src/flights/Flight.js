import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Flight extends Component {
	render() {
		const {price, id, index, durationThere, durationBack, changesThere, changesBack} = this.props;
		return (
			<li value={id}>
				<span>{index}</span>
				<span>Price: ${price}</span>
				<span>Duration there: {durationThere}</span>
				<span>{changesThere}</span>
				<span>Duration back: {durationBack}</span>
				<span>{changesBack}</span>
			</li>
		)
	}
}

Flight.propTypes = {
	price: PropTypes.number,
	index: PropTypes.number,
	id: PropTypes.number,
	durationThere: PropTypes.string,
	durationBack: PropTypes.string,
	changesThere: PropTypes.string,
	changesBack: PropTypes.string
};
