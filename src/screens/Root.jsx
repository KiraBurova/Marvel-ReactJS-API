import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import {ScreensMain} from './Main/Main';

export const ScreensRoot = () => (
  // <Router>
    <div>
      <Route path="/" component={ScreensMain} />
      <Route path="/chacracters" component={ScreensMain} />
      <Route path="/comics" component={ScreensMain} />
      <Route path="/creators" component={ScreensMain} />
      <Route path="/events" component={ScreensMain} />
      <Route path="/series" component={ScreensMain} />
      <Route path="/stories" component={ScreensMain} />
    </div>
  // </Router>
);