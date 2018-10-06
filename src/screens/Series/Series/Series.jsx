import React from 'react';
import PropTypes from 'prop-types';

import Series from '../../../components/Series/Detailed/Series';

export const ScreensSeries = (props) => (
    <div>
        <Series url={props.match.params.id}/>
    </div>
);

ScreensSeries.propTypes = {
    match: PropTypes.object.isRequired
};