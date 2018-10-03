import React from 'react';
import {Link} from 'react-router-dom';

import { Button } from '../../UI/Button/Button';

import './Card.css';

export const Card = ({character}) => (
    <Link to={`characters/${character.id}`}>
        <div className="card">
            <div className="card-image">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}></img>
                <span className="card-title">{character.name}</span>
                <div className="card-action">
                    <Button></Button>
                </div>
            </div>
        </div>
    </Link>
);