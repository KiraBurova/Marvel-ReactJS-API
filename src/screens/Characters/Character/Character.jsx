import React from 'react';

import Character from '../../../components/Characters/Character/Character';

export const ScreensCharacter = (props) => (
    <div>
        <Character url={props.match.params.id}/>
    </div>
);