import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSingleItem } from '../../../redux/actions/dataActions';

import { DetailedCard } from './Card/Card';

class Series extends Component {
    componentDidMount() {
        this.props.fetchSingleItem('series', +this.props.url);
    }
    render() {
        const series = this.props.series;

        return (
            <div className="row">
                <div className="col s12 ">{series ? <DetailedCard series={series} key={series.id}/> : <span>Loading data</span>}</div>
            </div>
        );
    }
}

Series.propTypes = {
    fetchSingleItem: PropTypes.func.isRequired,
    series: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    series: state.data.item
});

export default connect(mapStateToProps, { fetchSingleItem })(Series);