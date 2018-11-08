import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import rootReducer from './rootReducer'

import Navigation from './components/navigation/Navigation';
import FlashMessagesList from './components/flashMessages/FlashMessagesList';
import Home from './components/home/Home';
import Error404 from './components/errors/Error404';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{height: '100%'}}>
          <Navigation />
          <FlashMessagesList />
          <div style={{marginTop: '64px'}}>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route component={Error404}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Routes
