import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ScreensMain } from './Main/Main';
import { ScreensCharactersList } from './Characters/List/List';
import { ScreensCharacter } from './Characters/Character/Character';
import { Footer } from '../components/UI/Footer/Footer';

import store from '../redux/store/store';
import { ScreensComicsList } from './Comics/List/List';


export const ScreensRoot = () => (
    <Provider store={store}>
        <div>
            <Route path="/" exact component={ScreensMain} />
            <Route path="/characters" exact component={ScreensCharactersList} />
            <Route path="/characters/:id" exact component={ScreensCharacter} />
            <Route path="/comics" component={ScreensComicsList} />
            <Route path="/creators" component={ScreensMain} />
            <Route path="/events" component={ScreensMain} />
            <Route path="/series" component={ScreensMain} />
            <Route path="/stories" component={ScreensMain} />
            <Footer></Footer>
        </div>
    </Provider>
);