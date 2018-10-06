import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

import { Button } from '../../../UI/Button/Button';


export const DetailedCard = ({event}) => (
    <div className="card">
        <div className="card-main">
            <span className="card-title">{event.title}</span>
            <div className="card-image">
                <img src={`${event.thumbnail.path}.${event.thumbnail.extension}`} alt={event.title}></img>
            </div>
        </div>
        <div className="card-content">
            {!!event.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {event.comics.items.map(comic => {
                        return (<a className="collection-item" key={comic.name} href={comic.resourceURI}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!event.creators.available && <div className="creators">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Creators</h4></li>
                    {event.creators.items.map(creator => {
                        return (<a className="collection-item" key={creator.name} href={creator.resourceURI}>{creator.name} ({creator.role})</a>);
                    })}
                </ul>
            </div>}
            {!!event.series.available && <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {event.series.items.map(series => {
                        return (<a className="collection-item" key={series.name} href={series.resourceURI}>{series.name}</a>);
                    })}
                </ul>
            </div>}
            {!!event.stories.available && <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {event.stories.items.map(story => {
                        return (
                            <div  key={story.name + story.type} >
                                <a  className="collection-item"href={story.resourceURI}>
                                    {story.name}
                                    <span  className="secondary-content">{story.type}</span>
                                </a>
                            </div>
                        );
                    })}
                </ul>
            </div>}
        </div>
        {!!event.urls && !!event.urls.length && <div className="card-action">
            <div className="event__actions">
                {event.urls.map(url => {
                    return <Button text={url.type} link={url.url} key={url.url}></Button>;
                })}
            </div>
        </div>}
    </div>
);

DetailedCard.propTypes = {
    event: PropTypes.object.isRequired
};