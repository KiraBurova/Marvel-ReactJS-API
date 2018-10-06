import React, { Component } from 'react';
import SeriesList from '../../../components/Series/List/List';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export class ScreensSeriesList extends Component {
    render() {
        return (
            <div>
                <Navbar text={'Series'}/>
                <SeriesList />
            </div>
        );
    }
}