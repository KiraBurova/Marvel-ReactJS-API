import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import { Button } from '../../../UI/Button/Button';

export const DetailedCard = ({series, onGetData}) => (
    <div className="row">
        <div className="col s12 m6">
            <h4>{series.title}</h4>
            <div className="series__image">
                <img src={`${series.thumbnail.path}.${series.thumbnail.extension}`} alt={series.title}></img>
            </div>
            {!!series.urls && !!series.urls.length && <div className="card-action">
                <div className="series__actions">
                    {series.urls.map(url => {
                        return <Button text={url.type} link={url.url} key={url.url} external={true}></Button>;
                    })}
                </div>
            </div>}
        </div>
        <div className="col s12 m6">
            {!!series.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {series.comics.items.map(comic => {
                        return (<a href="!#" onClick={(e) => onGetData(comic.resourceURI, 'comics', e)} className="collection-item" key={comic.name}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!series.creators.available &&  <div className="creators">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Creators</h4></li>
                    {series.creators.items.map(creator => {
                        return (<a href="!#" onClick={(e) => onGetData(creator.resourceURI, 'creators', e)} className="collection-item" key={creator.name}>{creator.name} ({creator.role})</a>);
                    })}
                </ul>
            </div>}
            {!!series.characters.available && <div className="characters">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Characters</h4></li>
                    {series.characters.items.map(character => {
                        return (<a href="!#" onClick={(e) => onGetData(character.resourceURI, 'characters', e)} className="collection-item" key={character.name}>{character.name}</a>);
                    })}
                </ul>
            </div>}
            {!!series.stories.available && <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {series.stories.items.map(story => {
                        return (
                            <div  key={story.name + story.type} >
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
    series: PropTypes.object.isRequired,
    onGetData: PropTypes.func.isRequired
};