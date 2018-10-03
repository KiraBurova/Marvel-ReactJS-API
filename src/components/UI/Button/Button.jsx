import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export const Button = (props) => (
    <Link to={props.link} className="btn waves-effect">{props.text}</Link>
);

Button.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
