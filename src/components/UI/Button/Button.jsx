import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export const Button = (props) => (
    <div>
    {props.external ? <a href={props.link} className="btn red darken-3 waves-effect" target="_blank" rel="noopener noreferrer">{props.text}</a> :
    <Link to={props.link} className="btn red darken-3 waves-effect" target={props.target}>{props.text}</Link>}
    </div>
);

Button.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
