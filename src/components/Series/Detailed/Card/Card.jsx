import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

import { Button } from '../../../UI/Button/Button';

export const DetailedCard = ({series}) => (
    <div className="card">
        <div className="card-main">
            <span className="card-title">{series.title}</span>
            <div className="card-image">
                <img src={`${series.thumbnail.path}.${series.thumbnail.extension}`} alt={series.title}></img>
            </div>
        </div>
        <div className="card-content">
            {!!series.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {series.comics.items.map(comic => {
                        return (<a className="collection-item" key={comic.name} href={comic.resourceURI}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!series.creators.available &&  <div className="creators">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Creators</h4></li>
                    {series.creators.items.map(creator => {
                        return (<a className="collection-item" key={creator.name} href={creator.resourceURI}>{creator.name} ({creator.role})</a>);
                    })}
                </ul>
            </div>}
            {!!series.characters.available && <div className="characters">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Characters</h4></li>
                    {series.characters.items.map(character => {
                        return (<a className="collection-item" key={character.name} href={character.resourceURI}>{character.name}</a>);
                    })}
                </ul>
            </div>}
            {!!series.stories.available && <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {series.stories.items.map(story => {
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
        {!!series.urls && !!series.urls.length && <div className="card-action">
            <div className="series__actions">
                {series.urls.map(url => {
                    return <Button text={url.type} link={url.url} key={url.url}></Button>;
                })}
            </div>
        </div>}
    </div>
);

DetailedCard.propTypes = {
    series: PropTypes.object.isRequired
};