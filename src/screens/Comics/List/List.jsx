import React, { Component } from 'react';
import ComicsList from '../../../components/Comics/List/List';

export class ScreensComicsList extends Component {
    render() {
        return (
            <div>
                <h1>Comics</h1>
                <ComicsList />
            </div>
        );
    }
}