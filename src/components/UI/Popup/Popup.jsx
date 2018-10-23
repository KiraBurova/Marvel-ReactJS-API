import React from 'react';

import './Popup.css';

export const Popup = ({info}) => (
    <div>
        {console.log(info)}
        <div className="overlay"></div>
        <div className="popup">
            <i className="material-icons">close</i>
            <div className="card">
                <div className="card-image">
                    <img src={`${info.thumbnail.path}.${info.thumbnail.extension}`} alt={info.title}></img>
                    <span className='card-title'>{info.title}</span>
                </div>
                <div className="card-content">
                    <p>{info.description}</p>
                </div>
            </div>
        </div>
    </div>
);