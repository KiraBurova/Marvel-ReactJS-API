import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { EventsCard }  from '../Card/Card';

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class EventsList extends Component {
    componentDidMount() {
        this.fetchData();
    }
    fetchData(page) {
        this.props.fetchData('events', {page});
        window.scrollTo(0, 0);
    }
    render() {
        const {events, options} = this.props;

        return (
            <div>
                <div className="row">{events ? events.map((event) => {
                    return <EventsCard event={event} key={event.id}/>;
                }) : <span>Loading data</span>}</div>
                <Pagination current={options.page || 1} total={options.totalPages} pageSize={options.count} onChange={(page) => this.fetchData(page)}/>;
            </div>
        );
    }
}

EventsList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    events: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    events: state.data.data,
    options: state.data.options
});

export default connect(mapStateToProps, { fetchData })(EventsList);