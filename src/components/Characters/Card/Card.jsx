import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

export const CharactersCard = ({character}) => (
    <div className="col s12 m6 l3">
        <div className="card">
            <div className="card-image">
                <img src={`${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`} alt={character.name}></img>
                <span className='card-title'>{character.name}</span>
            </div>
            <div className='card-action'>
                <Button text={'Learn More'} link ={`characters/${character.id}`}></Button>
            </div>
        </div>
    </div>
);

CharactersCard.propTypes = {
    character: PropTypes.object.isRequired
};
