import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSingleItem } from '../../../redux/actions/dataActions';

import { DetailedCard } from './Card/Card';

class Comic extends Component {
    componentDidMount() {
        this.props.fetchSingleItem('comics', +this.props.url);
    }
    render() {
        const comic = this.props.comic;

        return (
            <div className="row">
                <div className="col s12 ">{comic ? <DetailedCard comic={comic} key={comic.id}/> : <span>Loading data</span>}</div>
            </div>
        );
    }
}

Comic.propTypes = {
    fetchSingleItem: PropTypes.func.isRequired,
    comic: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    comic: state.data.item
});

export default connect(mapStateToProps, { fetchSingleItem })(Comic);