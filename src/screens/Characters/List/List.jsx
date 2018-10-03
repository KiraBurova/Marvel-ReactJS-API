import React, { Component } from 'react';
import CharactersList from '../../../components/Characters/List/List';

export class ScreensCharactersList extends Component {
    render() {
        return (
            <div>
                <h1>Characters</h1>
                <CharactersList />
            </div>
        );
    }
}