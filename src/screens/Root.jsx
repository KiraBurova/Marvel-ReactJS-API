import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ScreensMain } from './Main/Main';
import { ScreensCharactersList } from './Characters/List/List';

import store from '../redux/store/store';


export const ScreensRoot = () => (
  <Provider store={store}>
    <div>
      <Route path="/" exact component={ScreensMain} />
      <Route path="/characters" component={ScreensCharactersList} />
      <Route path="/comics" component={ScreensMain} />
      <Route path="/creators" component={ScreensMain} />
      <Route path="/events" component={ScreensMain} />
      <Route path="/series" component={ScreensMain} />
      <Route path="/stories" component={ScreensMain} />
    </div>
  </Provider>
);