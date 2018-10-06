import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import {ComicsCard} from '../Card/Card';

class ComicsList extends Component {
    componentDidMount() {
        this.props.fetchData('comics');
    }
    render() {
        const comics = this.props.comics;

        return (
            <div className="row">{comics ? comics.map((comic) => {
                return <ComicsCard comic={comic} key={comic.id}/>;
            }) : <span>Loading data</span>}</div>
        );
    }
}

ComicsList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    comics: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    comics: state.data.data
});

export default connect(mapStateToProps, { fetchData })(ComicsList);