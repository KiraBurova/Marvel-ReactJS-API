import React, { Component } from 'react';
import CharactersList from '../../../components/Characters/List/List';
import { Navbar } from '../../../components/UI/Navbar/Navbar';
import SearchInputContainer from '../../../components/common/searchInputContainer/searchInputContainer';

export class ScreensCharactersList extends Component {
    render() {
        return (
            <div>
                <Navbar text={'Characters'}/>
                <SearchInputContainer type={'characters'}/>
                <CharactersList />
            </div>
        );
    }
}