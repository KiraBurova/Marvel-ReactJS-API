import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { CreatorsCard }  from '../Card/Card';

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class CreatorsList extends Component {
    componentDidMount() {
        this.fetchData();
    }
    fetchData(page) {
        this.props.fetchData('creators', {page});
        window.scrollTo(0, 0);
    }
    render() {
        const {creators, options} = this.props;

        return (
            <div>
            <div className="row">{creators ? creators.map((creator) => {
                return <CreatorsCard creator={creator} key={creator.id}/>;
            }) : <span>Loading data</span>}</div>
                <Pagination current={options.page || 1} total={options.totalPages} pageSize={options.count} onChange={(page) => this.fetchData(page)}/>;
            </div>
        );
    }
}

CreatorsList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    creators: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    creators: state.data.data,
    options: state.data.options
});

export default connect(mapStateToProps, { fetchData })(CreatorsList);