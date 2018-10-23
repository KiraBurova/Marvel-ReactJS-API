import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { StoriesCard }  from '../Card/Card';

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class StoriesList extends Component {
    componentDidMount() {
        this.fetchData();
    }
    fetchData(page) {
        this.props.fetchData('stories', {page});
        window.scrollTo(0, 0);
    }
    render() {
        const {stories, options} = this.props;

        return (
            <div>
                <div className="row">{stories ? stories.map((story) => {
                    return <StoriesCard story={story} key={story.id}/>;
                }) : <span>Loading data</span>}</div>
                {options.count && <Pagination style={{ margin: '100px' }} current={options.page || 1} total={options.totalPages} pageSize={options.count} onChange={(page) => this.fetchData(page)}/>};
            </div>
        );
    }
}

StoriesList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    stories: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    stories: state.data.data,
    options: state.data.options
});

export default connect(mapStateToProps, { fetchData })(StoriesList);