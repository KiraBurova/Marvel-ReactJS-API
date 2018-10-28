import React from 'react';
import PropTypes from 'prop-types';

import Character from '../../../components/Characters/Detailed/Character';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export const ScreensCharacter = (props) => (
    <div>
        <Navbar />
        <Character url={props.match.params.id}/>
    </div>
);

ScreensCharacter.propTypes = {
    match: PropTypes.object.isRequired
};
