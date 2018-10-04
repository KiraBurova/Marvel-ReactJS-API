import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { CharactersList }  from '../../Characters/List/List';

class Fetching extends Component {
    componentDidMount() {
        this.props.fetchData('characters');
    }
    render() {
        const data = this.props.data;

        return (
            <div className="row">
                <CharactersList />
                {/* <div className="col s12 m6">{characters ? characters.map((character) => {
                    return <CharactersCard character={character} key={character.id}/>;
                }) : <span>Loading data</span>}</div> */}
            </div>
        );
    }
}

Fetching.propTypes = {
    fetchData: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    data: state.data.data
});

export default connect(mapStateToProps, { fetchData })(Fetching);