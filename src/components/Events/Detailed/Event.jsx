import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSingleItem, fetchAdditionalData } from '../../../redux/actions/dataActions';

import { DetailedCard } from './Card/Card';
import { Popup } from '../../UI/Popup/Popup';

class Event extends Component {
    componentDidMount() {
        this.props.fetchSingleItem('events', +this.props.url);
    }
    onGetData(url, type, e) {
        e.preventDefault();
        const myRegexp = new RegExp(`${type}/(.*)`);
        const match = myRegexp.exec(url)[1];
        this.props.fetchAdditionalData(type, match);

        this.setState({
            popupOpen: true
        })
    }
    onClosePopup = () => {
        this.setState({
            popupOpen: false
        })
    }
    render() {
        const event = this.props.event;
        const additional = this.props.additional;

        return (
            <div className="row">
                <div className="col s12 ">{event ? <DetailedCard event={event} key={event.id} onGetData={(url, type, e) => this.onGetData(url, type, e)}/> : <span>Loading data</span>}</div>
                <div>{additional && this.state.popupOpen && <Popup info={additional} onClosePopup={this.onClosePopup}/>}</div>
            </div>
        );
    }
}

Event.propTypes = {
    fetchSingleItem: PropTypes.func.isRequired,
    fetchAdditionalData: PropTypes.func.isRequired,
    event: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    event: state.data.item,
    additional: state.data.additional
});

export default connect(mapStateToProps, { fetchSingleItem, fetchAdditionalData })(Event);