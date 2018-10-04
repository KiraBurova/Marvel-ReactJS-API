import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

import './Card.css';

export const ComicsCard = ({comic}) => (
    <div className="card">
        <div className="card-image">
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title}></img>
            <span className='card-title'>{comic.title}</span>
            <div className='card-action'>
                <Button text={'Learn More'} link ={`comics/${comic.id}`}></Button>
            </div>
        </div>
    </div>
);

ComicsCard.propTypes = {
    comic: PropTypes.object.isRequired
};
