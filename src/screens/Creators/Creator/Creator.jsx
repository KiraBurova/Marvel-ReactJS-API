import React from 'react';
import PropTypes from 'prop-types';

import Creator from '../../../components/Creators/Detailed/Creator';

export const ScreensCreator = (props) => (
    <div>
        <Creator url={props.match.params.id}/>
    </div>
);

ScreensCreator.propTypes = {
    match: PropTypes.object.isRequired
};