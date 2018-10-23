import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../UI/Button/Button';

// import styles from './Card.module.css';


export const StoriesCard = ({story}) => (
    <div className="col s12 m6 l3">
    <div className="card">
        <div className="card-content">
            <p>{story.title}</p>
        </div>
        <div className="card-action">
            <Button text={'Learn More'} link ={`stories/${story.id}`}></Button>
        </div>
        </div>
    </div>
);

StoriesCard.propTypes = {
    story: PropTypes.object.isRequired
};
