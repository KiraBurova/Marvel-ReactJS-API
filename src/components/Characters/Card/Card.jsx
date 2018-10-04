import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

import styles from './Card.module.css';


export const CharactersCard = ({character}) => (
    <div className="card">
        <div className="card-image">
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}></img>
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
