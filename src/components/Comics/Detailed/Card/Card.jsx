import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

import { Button } from '../../../UI/Button/Button';

export const DetailedCard = ({comic, onGetData}) => (
    <div className="row">
        <div className="col s12 m6">
            <h4>{comic.name}</h4>
            <div>
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.name}></img>
            </div>
            <p>{comic.description}</p>
            <span>Format: {comic.format}</span>
            <br></br>
            <span>Page count: {comic.pageCount}</span>
            <br></br>
            <span>Issue Number: {comic.issueNumber}</span>
            {!!comic.urls && !!comic.urls.length
            && <div className="comic__actions">
                {comic.urls.map(url => {
                    return <Button text={url.type} link={url.url} key={url.url} external={true}></Button>;
                })}
            </div>}
        </div>
        <div className="col s12 m6">
            {!!comic.characters.available && <div className="characters">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Characters</h4></li>
                    {comic.characters.items.map(character => {
                        return (<a href="!#" onClick={(e) => onGetData(character.resourceURI, 'characters', e)} className="collection-item" key={character.name}>{character.name}</a>);
                    })}
                </ul>
            </div>}
            {!!comic.events.available && <div className="events">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Events</h4></li>
                    {comic.events.items.map(event => {
                        return (<a href="!#" onClick={(e) => onGetData(event.resourceURI, 'events', e)} className="collection-item" key={event.name}>{event.name}</a>);
                    })}
                </ul>
            </div>}
            {!!comic.series.available && <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    <a href="!#" onClick={(e) => onGetData(comic.series.resourceURI, 'series', e)} className="collection-item" key={comic.series.name}>{comic.series.name}</a>
                </ul>
            </div>}
            {!!comic.stories.available && <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {comic.stories.items.map((story, i) => {
                        return (
                            <div  key={story.name + story.type + i} >
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
    comic: PropTypes.object.isRequired,
    onGetData: PropTypes.func.isRequired
};