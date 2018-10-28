import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

export const Navbar = (props) => (
    <nav className={styles['app__nav']}>
        <Link to="/">Home</Link>
        <h1>{props.text}</h1>
    </nav>
);

Navbar.propTypes = {
    text: PropTypes.string
};