import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

import { Button } from '../../../UI/Button/Button';

export const DetailedCard = ({creator, onGetData}) => (
    <div className="row">
        <div className="col s12 m6">
            <h4>{creator.fullName}</h4>
            <div>
                <img src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`} alt={creator.fullName}></img>
            </div>
            {!!creator.urls && !!creator.urls.length
            && <div className="creator__actions">
                {creator.urls.map(url => {
                    return <Button text={url.type} link={url.url} key={url.url} external={true}></Button>;
                })}
            </div>}
        </div>
        <div className="col s12 m6">
            {!!creator.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {creator.comics.items.map(comic => {
                        return (<a href="!#" onClick={(e) => onGetData(comic.resourceURI, 'comics', e)} className="collection-item" key={comic.name}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!creator.events.available && <div className="events">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Events</h4></li>
                    {creator.events.items.map(event => {
                        return (<a href="!#" onClick={(e) => onGetData(event.resourceURI, 'events', e)}  className="collection-item" key={event.name}>{event.name}</a>);
                    })}
                </ul>
            </div>}
            {!!creator.series.available && <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {creator.series.items.map(series => {
                        return (<a href="!#" onClick={(e) => onGetData(series.resourceURI, 'series', e)} className="collection-item" key={series.name}>{series.name}</a>);
                    })}
                </ul>
            </div>}
            {!!creator.stories.available && <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {creator.stories.items.map(story => {
                        return (
                            <div  key={story.name} >
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
    creator: PropTypes.object.isRequired,
    onGetData: PropTypes.func.isRequired
};