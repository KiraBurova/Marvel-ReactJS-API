import React, { Component } from 'react';
import SeriesList from '../../../components/Series/List/List';

export class ScreensSeriesList extends Component {
    render() {
        return (
            <div>
                <h1 className="center-align">Series</h1>
                <SeriesList />
            </div>
        );
    }
}