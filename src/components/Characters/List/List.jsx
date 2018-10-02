import React, {Component} from 'react';

import { connect } from 'react-redux';
import { fetchData } from '../../../redux/actions/dataActions';

import {Card} from '../Card/Card';

class CharactersList extends Component {
    componentDidMount() {
        this.props.fetchData('characters');
    };
    render() {
        const characters = this.props.characters;

        return (
            <div className="row">
            <div className="col s12 m6">{characters ? characters.map((character) => {
                return <Card character={character} key={character.id}/>
            }) : <span>Loading data</span>}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    characters: state.data.data
});

export default connect(mapStateToProps, { fetchData })(CharactersList);