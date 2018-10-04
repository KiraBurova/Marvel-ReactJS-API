import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

// import { Button } from '../../../UI/Button/Button';


export const DetailedCard = ({comic}) => (
    <div className="card">
        <div className="card-main">
            <span className="card-title">{comic.name}</span>
            <div className="card-image">
                <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.name}></img>
            </div>
            <p>{comic.description}</p>
            <span>Format: {comic.format}</span>
            <br></br>
            <span>Page count: {comic.pageCount}</span>
            <br></br>
            <span>Issue Number: {comic.issueNumber}</span>
        </div>
        <div className="card-content">
            <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Characters</h4></li>
                    {comic.characters.items.map(character => {
                        return (<a className="collection-item" key={character.name} href={character.resourceURI}>{character.name}</a>);
                    })}
                </ul>
            </div>
            <div className="events">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Events</h4></li>
                    {comic.events.items.map(event => {
                        return (<a className="collection-item" key={event.name} href={event.resourceURI}>{event.name}</a>);
                    })}
                </ul>
            </div>
            {/* <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {comic.series.items.map(series => {
                        return (<a className="collection-item" key={series.name} href={series.resourceURI}>{series.name}</a>);
                    })}
                </ul>
            </div> */}
            <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {comic.stories.items.map(story => {
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

DetailedCard.propTypes = {
    comic: PropTypes.object.isRequired
};