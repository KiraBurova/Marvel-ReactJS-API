import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

// import styles from './Card.module.css';


export const SeriesCard = ({series}) => (
    <div className="card col s12 m6 l3">
        <div className="card-image">
            <img src={`${series.thumbnail.path}/landscape_incredible.${series.thumbnail.extension}`} alt={series.title}></img>
            <span className='card-title truncate'>{series.title}</span>
            <div className='card-action'>
                <Button text={'Learn More'} link ={`series/${series.id}`}></Button>
            </div>
        </div>
    </div>
);

SeriesCard.propTypes = {
    series: PropTypes.object.isRequired
};
