import React from 'react'
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router'
import Main from './containers/Main'
import Welcome from './components/Welcome/Welcome'

export const AppRouter = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Welcome} />
    </Route>
  </Router>
)
