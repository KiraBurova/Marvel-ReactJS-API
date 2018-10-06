import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchSingleItem } from '../../../redux/actions/dataActions';

import { DetailedCard } from './Card/Card';

class Story extends Component {
    componentDidMount() {
        this.props.fetchSingleItem('stories', +this.props.url);
    }
    render() {
        const story = this.props.story;

        return (
            <div className="row">
                <div className="col s12 ">{story ? <DetailedCard story={story} key={story.id}/> : <span>Loading data</span>}</div>
            </div>
        );
    }
}

Story.propTypes = {
    fetchSingleItem: PropTypes.func.isRequired,
    story: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    story: state.data.item
});

export default connect(mapStateToProps, { fetchSingleItem })(Story);