import React, { Component } from 'react';
import ComicsList from '../../../components/Comics/List/List';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export class ScreensComicsList extends Component {
    render() {
        return (
            <div>
                <Navbar text={'Comics'}/>
                <ComicsList />
            </div>
        );
    }
}