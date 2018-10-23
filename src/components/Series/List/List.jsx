import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { SeriesCard }  from '../Card/Card';

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class SeriesList extends Component {
    componentDidMount() {
        this.fetchData();
    }
    fetchData(page) {
        this.props.fetchData('series', {page});
        window.scrollTo(0, 0);
    }
    render() {
        const {series, options} = this.props;

        return (
            <div>
                <div className="row">{series ? series.map((series) => {
                    return <SeriesCard series={series} key={series.id}/>;
                }) : <span>Loading data</span>}</div>
                {options.count && <Pagination current={options.page || 1} total={options.totalPages} pageSize={options.count} onChange={(page) => this.fetchData(page)}/>};
            </div>
        );
    }
}

SeriesList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    series: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    series: state.data.data,
    options: state.data.options
});

export default connect(mapStateToProps, { fetchData })(SeriesList);