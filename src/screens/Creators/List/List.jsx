import React, { Component } from 'react';
import CreatorsList from '../../../components/Creators/List/List';

export class ScreensCreatorsList extends Component {
    render() {
        return (
            <div>
                <h1 className="center-align">Creators</h1>
                <CreatorsList />
            </div>
        );
    }
}