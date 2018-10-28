import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

import { Button } from '../../../UI/Button/Button';


export const DetailedCard = ({event, onGetData}) => (
    <div className="row">
        <div className="col s12 m6">
            <h4>{event.title}</h4>
            <div>
                <img src={`${event.thumbnail.path}.${event.thumbnail.extension}`} alt={event.title}></img>
            </div>
            {!!event.urls && !!event.urls.length
            && <div className="event__actions">
                {event.urls.map(url => {
                    return <Button text={url.type} link={url.url} key={url.url} external={true}></Button>;
                })}
            </div>}
        </div>
        <div className="col s12 m6">
            {!!event.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {event.comics.items.map(comic => {
                        return (<a href="!#" onClick={(e) => onGetData(comic.resourceURI, 'comics', e)} className="collection-item" key={comic.name}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!event.creators.available && <div className="creators">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Creators</h4></li>
                    {event.creators.items.map(creator => {
                        return (<a href="!#" onClick={(e) => onGetData(creator.resourceURI, 'creators', e)} className="collection-item" key={creator.name}>{creator.name} ({creator.role})</a>);
                    })}
                </ul>
            </div>}
            {!!event.series.available && <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {event.series.items.map(series => {
                        return (<a href="!#" onClick={(e) => onGetData(series.resourceURI, 'series', e)} className="collection-item" key={series.name}>{series.name}</a>);
                    })}
                </ul>
            </div>}
            {!!event.stories.available && <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {event.stories.items.map(story => {
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
    event: PropTypes.object.isRequired,
    onGetData: PropTypes.func.isRequired
};