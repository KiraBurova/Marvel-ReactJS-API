import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ScreensMain } from './Main/Main';
import { ScreensCharactersList } from './Characters/List/List';
import { ScreensCharacter } from './Characters/Character/Character';
import { Footer } from '../components/UI/Footer/Footer';

import store from '../redux/store/store';
import { ScreensComicsList } from './Comics/List/List';
import { ScreensComic } from './Comics/Comic/Comic';
import { ScreensCreatorsList } from './Creators/List/List';
import { ScreensCreator } from './Creators/Creator/Creator';
import { ScreensEventsList } from './Events/List/List';
import { ScreensEvent } from './Events/Event/Event';
import { ScreensStoriesList } from './Stories/List/List';
import { ScreensStory } from './Stories/Story/Story';
import { ScreensSeriesList } from './Series/List/List';
import { ScreensSeries } from './Series/Series/Series';


export const ScreensRoot = () => (
    <Provider store={store}>
        <div>
            <Route path="/" exact component={ScreensMain} />
            <Route path="/characters" exact component={ScreensCharactersList} />
            <Route path="/characters/:id" exact component={ScreensCharacter} />
            <Route path="/comics" exact component={ScreensComicsList} />
            <Route path="/comics/:id" exact component={ScreensComic} />
            <Route path="/creators" exact component={ScreensCreatorsList} />
            <Route path="/creators/:id" exact component={ScreensCreator} />
            <Route path="/events" exact component={ScreensEventsList} />
            <Route path="/events/:id" exact component={ScreensEvent} />
            <Route path="/series" exact component={ScreensSeriesList} />
            <Route path="/series/:id" exact component={ScreensSeries} />
            <Route path="/stories" exact component={ScreensStoriesList} />
            <Route path="/stories/:id" exact component={ScreensStory} />
            <Footer></Footer>
        </div>
    </Provider>
);