import React, { Component } from 'react';
import StoriesList from '../../../components/Stories/List/List';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export class ScreensStoriesList extends Component {
    render() {
        return (
            <div>
                <Navbar text={'Stories'}/>
                <StoriesList />
            </div>
        );
    }
}