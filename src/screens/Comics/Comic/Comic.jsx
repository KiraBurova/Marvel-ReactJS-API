import React from 'react';
import PropTypes from 'prop-types';

import Comic from '../../../components/Comics/Detailed/Comic';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export const ScreensComic = (props) => (
    <div>
        <Navbar />
        <Comic url={props.match.params.id}/>
    </div>
);

ScreensComic.propTypes = {
    match: PropTypes.object.isRequired
};