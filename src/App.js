import React, { Component } from 'react';
import { ScreensRoot } from './screens/Root';

export const API_KEY = process.env.REACT_APP_MARVEL_API_KEY;

class App extends Component {
  render() {
    return (
      <ScreensRoot />
    );
  }
}

export default App;
