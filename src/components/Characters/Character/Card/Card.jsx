import React from 'react';

import './Card.css';

import { Button } from '../../../UI/Button/Button';


export const Card = ({character}) => (
    <div className="card">
        <div className="card-image">
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}></img>
            <span className="card-title">{character.name}</span>
        </div>
        <div className="card-content">
            <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {character.comics.items.map(comic => {
                        return (<a className="collection-item" key={comic.name} href={comic.resourceURI}>{comic.name}</a>);
                    })}
                </ul>
            </div>
            <div className="events">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Events</h4></li>
                    {character.events.items.map(event => {
                        return (<a className="collection-item" key={event.name} href={event.resourceURI}>{event.name}</a>);
                    })}
                </ul>
            </div>
            <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {character.series.items.map(series => {
                        return (<a className="collection-item" key={series.name} href={series.resourceURI}>{series.name}</a>);
                    })}
                </ul>
            </div>
            <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {character.stories.items.map(story => {
                        return (
                            <div  key={story.name} >
                                <a  className="collection-item"href={story.resourceURI}>
                                    {story.name}
                                    <span  className="secondary-content">{story.type}</span>
                                </a>
                            </div>
                        );
                    })}
                </ul>
            </div>
        </div>
        <div className="card-action">
            {/* <Button></Button> */}
        </div>
    </div>
);