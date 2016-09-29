import React from 'react'
import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'
import Main from './containers/Main'
import Welcome from './components/Welcome/Welcome'
import Reddit from './containers/Reddit'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export const AppRouter = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Welcome} />
        <Route path='reddit' component={Reddit} />
      </Route>
    </Router>
  </Provider>
)
