import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

import styles from './Card.module.css';

export const CharactersCard = ({character}) => (
    <div className="card col s12 m6 l3">
        <div className="card-image">
            <img src={`${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`} alt={character.name}></img>
            <span className='card-title'>{character.name}</span>
            <div className={styles['card-action']}>
                <Button text={'Learn More'} link ={`characters/${character.id}`}></Button>
            </div>
        </div>
    </div>
);

CharactersCard.propTypes = {
    character: PropTypes.object.isRequired
};
