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


export const ScreensRoot = () => (
    <Provider store={store}>
        <div>
            <Route path="/" exact component={ScreensMain} />
            <Route path="/characters" exact component={ScreensCharactersList} />
            <Route path="/characters/:id" exact component={ScreensCharacter} />
            <Route path="/comics" exact component={ScreensComicsList} />
            <Route path="/comics/:id" exact component={ScreensComic} />
            <Route path="/creators" exact component={ScreensMain} />
            <Route path="/events" exact component={ScreensMain} />
            <Route path="/series" exact component={ScreensMain} />
            <Route path="/stories" exact component={ScreensMain} />
            <Footer></Footer>
        </div>
    </Provider>
);