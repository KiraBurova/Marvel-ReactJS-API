import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

export const DetailedCard = ({story, onGetData}) => (
    <div className="row">
        <div className="col s12 m6">
            <h4>{story.title} {story.type}</h4>
            <div>
                Original issue <a href={story.originalIssue.resourceURI}>{story.originalIssue.name}</a>
            </div>
        </div>
        <div className="col s12 m6">
            {!!story.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {story.comics.items.map(comic => {
                        return (<a href="!#" onClick={(e) => onGetData(comic.resourceURI, 'comics', e)} className="collection-item" key={comic.name}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!story.creators.available && <div className="creators">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Creators</h4></li>
                    {story.creators.items.map(creator => {
                        return (<a href="!#" onClick={(e) => onGetData(creator.resourceURI, 'creators', e)} className="collection-item" key={creator.name}>{creator.name} ({creator.role})</a>);
                    })}
                </ul>
            </div>}
            {!!story.series.available && <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {story.series.items.map(series => {
                        return (<a href="!#" onClick={(e) => onGetData(series.resourceURI, 'series', e)} className="collection-item" key={series.name}>{series.name}</a>);
                    })}
                </ul>
            </div>}
            {!!story.characters.available && <div className="characters">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Characters</h4></li>
                    {story.characters.items.map(character => {
                        return (<a href="!#" onClick={(e) => onGetData(character.resourceURI, 'characters', e)} className="collection-item" key={character.name}>{character.name}</a>);
                    })}
                </ul>
            </div>}
        </div>
    </div>
);

DetailedCard.propTypes = {
    story: PropTypes.object.isRequired,
    onGetData: PropTypes.func.isRequired
};