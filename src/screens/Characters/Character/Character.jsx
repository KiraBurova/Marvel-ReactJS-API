import React from 'react';
import PropTypes from 'prop-types';

import Character from '../../../components/Characters/Detailed/Character';

export const ScreensCharacter = (props) => (
    <div>
        <Character url={props.match.params.id}/>
    </div>
);

ScreensCharacter.propTypes = {
    match: PropTypes.object.isRequired
};
