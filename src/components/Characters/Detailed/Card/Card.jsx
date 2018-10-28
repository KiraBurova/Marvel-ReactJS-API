import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import { Button } from '../../../UI/Button/Button';

export const DetailedCard = ({character, onGetData}) => (
    <div className="row">
        <div className="col s12 m6">
            <h4>{character.name}</h4>
            <div className="character__image">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}></img>
            </div>
            {!!character.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {character.comics.items.map(comic => {
                        return (<a href='!#' onClick={(e) => onGetData(comic.resourceURI, 'comics', e)} className="collection-item" key={comic.name}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!character.urls && !!character.urls.length && <div>
                <div className="character__actions">
                    {character.urls.map(url => {
                        return <Button text={url.type} link={url.url} key={url.url} external={true}></Button>;
                    })}
                </div>
            </div>}
        </div>
        <div className="col s12 m6">
            {!!character.events.available && <div className="events">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Events</h4></li>
                    {character.events.items.map(event => {
                        return (<a href="!#" onClick={(e) => onGetData(event.resourceURI, 'events', e)} className="collection-item" key={event.name}>{event.name}</a>);
                    })}
                </ul>
            </div>}
            {!!character.series.available && <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {character.series.items.map(series => {
                        return (<a href="!#" onClick={(e) => onGetData(series.resourceURI, 'series', e)} className="collection-item" key={series.name}>{series.name}</a>);
                    })}
                </ul>
            </div>}
            {!!character.stories.available && <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {character.stories.items.map(story => {
                        return (
                            <div key={story.name + story.type} >
                                <div className="collection-item">
                                    {story.name}
                                    <span  className="secondary-content">{story.type}</span>
                                </div>
                            </div>
                        );
                    })}
                </ul>
            </div>}
        </div>
    </div>
);

DetailedCard.propTypes = {
    character: PropTypes.object.isRequired,
    onGetData: PropTypes.func.isRequired
};