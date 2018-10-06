import React, { Component } from 'react';
import CharactersList from '../../../components/Characters/List/List';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export class ScreensCharactersList extends Component {
    render() {
        return (
            <div>
                <Navbar text={'Characters'}/>
                <CharactersList />
            </div>
        );
    }
}