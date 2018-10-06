import React, { Component } from 'react';
import EventsList from '../../../components/Events/List/List';
import { Navbar } from '../../../components/UI/Navbar/Navbar';

export class ScreensEventsList extends Component {
    render() {
        return (
            <div>
                <Navbar text={'Events'}/>
                <EventsList />
            </div>
        );
    }
}