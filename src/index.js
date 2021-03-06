import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './rootReducer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Routes from './routes';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension  ? window.devToolsExtension() : f => f
  )
)


ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
