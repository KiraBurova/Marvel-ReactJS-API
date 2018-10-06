import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { SeriesCard }  from '../Card/Card';

class SeriesList extends Component {
    componentDidMount() {
        this.props.fetchData('series');
    }
    render() {
        const series = this.props.series;

        return (
            <div className="row">{series ? series.map((series) => {
                return <SeriesCard series={series} key={series.id}/>;
            }) : <span>Loading data</span>}</div>
        );
    }
}

SeriesList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    series: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    series: state.data.data
});

export default connect(mapStateToProps, { fetchData })(SeriesList);