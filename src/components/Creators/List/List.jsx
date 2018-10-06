import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { CreatorsCard }  from '../Card/Card';

class CreatorsList extends Component {
    componentDidMount() {
        this.props.fetchData('creators');
    }
    render() {
        const creators = this.props.creators;

        return (
            <div className="row">{creators ? creators.map((creator) => {
                return <CreatorsCard creator={creator} key={creator.id}/>;
            }) : <span>Loading data</span>}</div>
        );
    }
}

CreatorsList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    creators: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    creators: state.data.data
});

export default connect(mapStateToProps, { fetchData })(CreatorsList);