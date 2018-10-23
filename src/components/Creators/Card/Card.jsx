import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

// import styles from './Card.module.css';

export const CreatorsCard = ({creator}) => (
    <div className="col s12 m6 l3">
    <div className="card">
        <div className="card-image">
            <img src={`${creator.thumbnail.path}/landscape_incredible.${creator.thumbnail.extension}`} alt={creator.fullName}></img>
            <span className='card-title truncate'>{creator.fullName}</span>
            </div>
            <div className='card-action'>
                <Button text={'Learn More'} link ={`creators/${creator.id}`}></Button>
            </div>
        </div>
    </div>
);

CreatorsCard.propTypes = {
    creator: PropTypes.object.isRequired
};
