import React from 'react';
import PropTypes from 'prop-types';

import Story from '../../../components/Stories/Detailed/Story';

export const ScreensStory = (props) => (
    <div>
        <Story url={props.match.params.id}/>
    </div>
);

ScreensStory.propTypes = {
    match: PropTypes.object.isRequired
};