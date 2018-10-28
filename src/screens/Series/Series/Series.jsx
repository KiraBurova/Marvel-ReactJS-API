import React from 'react';
import PropTypes from 'prop-types';

import Series from '../../../components/Series/Detailed/Series';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export const ScreensSeries = (props) => (
    <div>
        <Navbar />
        <Series url={props.match.params.id}/>
    </div>
);

ScreensSeries.propTypes = {
    match: PropTypes.object.isRequired
};