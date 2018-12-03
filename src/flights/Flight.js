import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Flight extends Component {
	render() {
		const {price, id, index} = this.props;
		return (
			<li value={id}>
				<span>{index}</span>
				<span>Price: ${price}</span>
			</li>
		)
	}
}

Flight.propTypes = {
	price: PropTypes.number,
	index: PropTypes.number,
	id: PropTypes.number
};
