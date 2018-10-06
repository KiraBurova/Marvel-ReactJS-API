import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { StoriesCard }  from '../Card/Card';

class StoriesList extends Component {
    componentDidMount() {
        this.props.fetchData('stories');
    }
    render() {
        const stories = this.props.stories;

        return (
            <div className="row">{stories ? stories.map((story) => {
                return <StoriesCard story={story} key={story.id}/>;
            }) : <span>Loading data</span>}</div>
        );
    }
}

StoriesList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    stories: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    stories: state.data.data
});

export default connect(mapStateToProps, { fetchData })(StoriesList);