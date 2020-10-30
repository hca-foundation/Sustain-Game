import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../views/Home';
import Splash from '../../views/Splash';
import Countdown from '../../views/Countdown';
import Quiz from '../../views/Quiz';
import Score from '../../views/Score';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path='/'
            exact
            component={Splash}
          />
          <Route
            path='/info'
            exact
            component={Home}
          />
          <Route
            path='/countdown'
            exact
            component={Countdown}
          />
          <Route
            exact
            path="/quiz/:id"
            component={(props) => <Quiz {...props} />}
          />
          <Route
            exact
            path="/score"
            component={Score}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
