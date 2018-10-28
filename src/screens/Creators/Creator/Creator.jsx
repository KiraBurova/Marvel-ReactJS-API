import React from 'react';
import PropTypes from 'prop-types';

import Creator from '../../../components/Creators/Detailed/Creator';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export const ScreensCreator = (props) => (
    <div>
        <Navbar />
        <Creator url={props.match.params.id}/>
    </div>
);

ScreensCreator.propTypes = {
    match: PropTypes.object.isRequired
};