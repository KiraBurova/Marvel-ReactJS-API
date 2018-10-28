import React from 'react';
import PropTypes from 'prop-types';

import Event from '../../../components/Events/Detailed/Event';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export const ScreensEvent = (props) => (
    <div>
        <Navbar />
        <Event url={props.match.params.id}/>
    </div>
);

ScreensEvent.propTypes = {
    match: PropTypes.object.isRequired
};