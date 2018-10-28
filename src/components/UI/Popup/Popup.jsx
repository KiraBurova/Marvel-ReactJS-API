import React from 'react';
import PropTypes from 'prop-types';

import './Popup.css';

export const Popup = ({info, onClosePopup}) => (
    <div>
        <div className="overlay" onClick={onClosePopup}></div>
        <div className="popup">
            <div className="card">
                <div className="card-image">
                    <img src={`${info.thumbnail.path}.${info.thumbnail.extension}`} alt={info.title}></img>
                    <span className='card-title'>{info.title || info.fullName || info.name}</span>
                </div>
                <div className="card-content">
                    <p>{info.description}</p>
                </div>
            </div>
        </div>
    </div>
);

Popup.propTypes = {
    info: PropTypes.object.isRequired,
    onClosePopup: PropTypes.func.isRequired
};