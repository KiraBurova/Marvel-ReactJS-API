import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

export const DetailedCard = ({story}) => (
    <div className="card">
        <div className="card-main">
            <span className="card-title">{story.title} {story.type}</span>
            <div>
                Original issue <a href={story.originalIssue.resourceURI}>{story.originalIssue.name}</a>
            </div>
        </div>
        <div className="card-content">
            {!!story.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {story.comics.items.map(comic => {
                        return (<a className="collection-item" key={comic.name} href={comic.resourceURI}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!story.creators.available && <div className="creators">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Creators</h4></li>
                    {story.creators.items.map(creator => {
                        return (<a className="collection-item" key={creator.name} href={creator.resourceURI}>{creator.name} ({creator.role})</a>);
                    })}
                </ul>
            </div>}
            {!!story.series.available && <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {story.series.items.map(series => {
                        return (<a className="collection-item" key={series.name} href={series.resourceURI}>{series.name}</a>);
                    })}
                </ul>
            </div>}
            {!!story.characters.available && <div className="characters">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Characters</h4></li>
                    {story.characters.items.map(character => {
                        return (<a className="collection-item" key={character.name} href={character.resourceURI}>{character.name}</a>);
                    })}
                </ul>
            </div>}
        </div>
    </div>
);

DetailedCard.propTypes = {
    story: PropTypes.object.isRequired
};