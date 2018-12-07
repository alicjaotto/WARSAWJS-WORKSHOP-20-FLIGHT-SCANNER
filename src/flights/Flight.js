import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import '../assets/css/Flight.css';
import cyan from '@material-ui/core/colors/cyan';

export class Flight extends Component {
	render() {
		const {price, id, durationThere, durationBack, changesThere, changesBack} = this.props;
		const dividerStyle = {
			backgroundColor: cyan[50]
		}

		return (
			<div id={id}
				className="Flight__wrapper">
				<div className="Flight__wrapper__content">
					<div className="Flight__wrapper__content__price-box">
						<div className="Flight__wrapper__content__price-box__details">
							<div className="Flight__wrapper__content__price-box__details__label">price</div>
							<div className="Flight__wrapper__content__price-box__details__price">
								<span className="Flight__wrapper__content__price-box__details__price__currency">$</span>
								<span className="Flight__wrapper__content__price-box__details__price__amount">{price}</span>
							</div>
							<div className="Flight__wrapper__content__price-box__details__info">per passenger</div>
						</div>
					</div>
					<div className="Flight__wrapper__content__arrows">
						<div className="Flight__wrapper__content__arrows__right"></div>
						<div className="Flight__wrapper__content__arrows__left"></div>
					</div>
					<div className="Flight__wrapper__content__flights">
						<div className="Flight__wrapper__content__flights__flight">
							<div className="Flight__wrapper__content__flights__flight__duration">{durationThere}</div>
							<div className="Flight__wrapper__content__flights__flight__changes">{changesThere}</div>
						</div>
						<Divider style={dividerStyle} />
						<div className="Flight__wrapper__content__flights__flight">
							<div className="Flight__wrapper__content__flights__flight__duration">{durationBack}</div>
							<div className="Flight__wrapper__content__flights__flight__changes">{changesBack}</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Flight.propTypes = {
	price: PropTypes.number,
	id: PropTypes.number,
	durationThere: PropTypes.string,
	durationBack: PropTypes.string,
	changesThere: PropTypes.string,
	changesBack: PropTypes.string
};
