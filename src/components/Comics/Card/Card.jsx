import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

import './Card.css';

export const ComicsCard = ({comic}) => (
    <div className="card col s12 m6 l3">
        <div className="card-image">
            <img src={`${comic.thumbnail.path}/landscape_incredible.${comic.thumbnail.extension}`} alt={comic.title}></img>
            <span className='card-title truncate'>{comic.title}</span>
            <div className='card-action'>
                <Button text={'Learn More'} link ={`comics/${comic.id}`}></Button>
            </div>
        </div>
    </div>
);

ComicsCard.propTypes = {
    comic: PropTypes.object.isRequired
};
