import React, { Component } from 'react';
import StoriesList from '../../../components/Stories/List/List';

export class ScreensStoriesList extends Component {
    render() {
        return (
            <div>
                <h1 className="center-align">Stories</h1>
                <StoriesList />
            </div>
        );
    }
}