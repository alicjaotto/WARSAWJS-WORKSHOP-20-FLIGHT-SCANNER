import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Flight extends Component {
	render() {
		const {price, id, index} = this.props;
		return (
			<li key={id} value={id}>
				<span> choice nr {index}</span>
				<span>Price: ${price}</span>
			</li>
		)
	}
}

Flight.propTypes = {
	price: PropTypes.number,
	index: PropTypes.string,
	id: PropTypes.number
};
