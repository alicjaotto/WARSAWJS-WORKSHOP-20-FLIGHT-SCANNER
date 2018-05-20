import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';

export class FlightsView extends Component {
    render() {
    const {onClick} = this.props;
        return (
            <div>
                <ol>
                    <li>Flight #1</li>
                    <li>Flight #2</li>
                    <li>Flight #3</li>
                </ol>
                <FlatButton primary onClick={onClick} label='Go back'/>
            </div>
        )
    }
}

FlightsView.propTypes = {
    onClick: PropTypes.func.isRequired
};
