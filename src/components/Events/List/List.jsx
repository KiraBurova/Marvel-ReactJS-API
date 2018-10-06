import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { EventsCard }  from '../Card/Card';

class EventsList extends Component {
    componentDidMount() {
        this.props.fetchData('events');
    }
    render() {
        const events = this.props.events;

        return (
            <div className="row">{events ? events.map((event) => {
                return <EventsCard event={event} key={event.id}/>;
            }) : <span>Loading data</span>}</div>
        );
    }
}

EventsList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    events: state.data.data
});

export default connect(mapStateToProps, { fetchData })(EventsList);