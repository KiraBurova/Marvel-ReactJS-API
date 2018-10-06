import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import { CharactersCard }  from '../Card/Card';

class CharactersList extends Component {
    componentDidMount() {
        this.props.fetchData('characters');
    }
    render() {
        const characters = this.props.characters;

        return (
            <div  className="row">{characters ? characters.map((character) => {
                return <CharactersCard character={character} key={character.id}/>;
            }) : <span>Loading data</span>}</div>
        );
    }
}

CharactersList.propTypes = {
    fetchData: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    characters: state.data.data
});

export default connect(mapStateToProps, { fetchData })(CharactersList);