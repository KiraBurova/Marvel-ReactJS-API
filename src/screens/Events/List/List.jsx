import React, { Component } from 'react';
import EventsList from '../../../components/Events/List/List';

export class ScreensEventsList extends Component {
    render() {
        return (
            <div>
                <h1 className="center-align">Events</h1>
                <EventsList />
            </div>
        );
    }
}