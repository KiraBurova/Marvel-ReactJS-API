import React from 'react';
import PropTypes from 'prop-types';

import Comic from '../../../components/Comics/Detailed/Comic';

export const ScreensComic = (props) => (
    <div>
        <Comic url={props.match.params.id}/>
    </div>
);

ScreensComic.propTypes = {
    match: PropTypes.object.isRequired
};