import React, { Component } from 'react';
import CreatorsList from '../../../components/Creators/List/List';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export class ScreensCreatorsList extends Component {
    render() {
        return (
            <div>
                <Navbar text={'Creators'}/>
                <CreatorsList />
            </div>
        );
    }
}