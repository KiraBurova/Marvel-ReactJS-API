import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

import styles from './Card.module.css';

export const Card = ({character}) => (
    <div className="card">
        <div className="card-image">
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}></img>
            <span className={styles['card-title']}>{character.name}</span>
            <div className={styles['card-action']}>
                <Button text={'Learn More'} link ={`characters/${character.id}`}></Button>
            </div>
        </div>
    </div>
);

Card.propTypes = {
    character: PropTypes.object.isRequired
};
