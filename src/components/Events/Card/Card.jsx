import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

// import styles from './Card.module.css';


export const EventsCard = ({event}) => (
    <div className="col s12 m6 l3">
    <div className="card">
        <div className="card-image">
            <img src={`${event.thumbnail.path}/landscape_incredible.${event.thumbnail.extension}`} alt={event.title}></img>
            <span className='card-title truncate'>{event.title}</span>
            </div>
            <div className='card-action'>
                <Button text={'Learn More'} link ={`events/${event.id}`}></Button>
            </div>
        </div>
    </div>
);

EventsCard.propTypes = {
    event: PropTypes.object.isRequired
};
