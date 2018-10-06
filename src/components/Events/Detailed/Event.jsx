import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSingleItem } from '../../../redux/actions/dataActions';

import { DetailedCard } from './Card/Card';

class Event extends Component {
    componentDidMount() {
        this.props.fetchSingleItem('events', +this.props.url);
    }
    render() {
        const event = this.props.event;

        return (
            <div className="row">
                <div className="col s12 ">{event ? <DetailedCard event={event} key={event.id}/> : <span>Loading data</span>}</div>
            </div>
        );
    }
}

Event.propTypes = {
    fetchSingleItem: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    event: state.data.item
});

export default connect(mapStateToProps, { fetchSingleItem })(Event);