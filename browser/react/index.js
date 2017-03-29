import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer';
import Albums from './components/Albums.js';
import Album from './components/Album.js';
import Artists from './components/Artists.js';
import Artist from './components/Artist.js';
import Songs from './components/Songs.js';
import NotFound from './components/NotFound.js';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRedirect to='/albums' />
      <Route path='/albums' component={Albums} />
      <Route path='/albums/:albumId' component={Album} />
      <Route path='/artists' component={Artists} />
      <Route path='/artists/:artistId' component={Artist}>
        <Route path='albums' component={Albums} />
        <Route path='songs' component={Songs} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('app')
);
