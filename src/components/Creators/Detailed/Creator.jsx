import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSingleItem } from '../../../redux/actions/dataActions';

import { DetailedCard } from './Card/Card';

class Creator extends Component {
    componentDidMount() {
        this.props.fetchSingleItem('creators', +this.props.url);
    }
    render() {
        const creator = this.props.creator;

        return (
            <div className="row">
                <div className="col s12 ">{creator ? <DetailedCard creator={creator} key={creator.id}/> : <span>Loading data</span>}</div>
            </div>
        );
    }
}

Creator.propTypes = {
    fetchSingleItem: PropTypes.func.isRequired,
    creator: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    creator: state.data.item
});

export default connect(mapStateToProps, { fetchSingleItem })(Creator);