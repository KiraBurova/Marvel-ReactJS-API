import React from 'react';
import PropTypes from 'prop-types';

import './Navbar.css';

export const Navbar = (props) => (
    <nav className="app__nav">
        <h1 className="center-align">{props.text}</h1>
    ]</nav>
);

Navbar.propTypes = {
    text: PropTypes.string.isRequired
};