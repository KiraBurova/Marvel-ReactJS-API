import React from 'react';
import PropTypes from 'prop-types';

import Story from '../../../components/Stories/Detailed/Story';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export const ScreensStory = (props) => (
    <div>
        <Navbar />
        <Story url={props.match.params.id}/>
    </div>
);

ScreensStory.propTypes = {
    match: PropTypes.object.isRequired
};