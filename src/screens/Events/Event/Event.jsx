import React from 'react';
import PropTypes from 'prop-types';

import Event from '../../../components/Events/Detailed/Event';

export const ScreensEvent = (props) => (
    <div>
        <Event url={props.match.params.id}/>
    </div>
);

ScreensEvent.propTypes = {
    match: PropTypes.object.isRequired
};