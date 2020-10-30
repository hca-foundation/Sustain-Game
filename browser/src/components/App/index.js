import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import getActiveEventQuestions from '../../data/getActiveEvent';
import Home from '../../views/Home';
import Splash from '../../views/Splash';
import Countdown from '../../views/Countdown';
import Leaderboard from '../../views/Leaderboard';

export default class App extends Component {
  state = {
    questions: [],
  };

  componentDidMount() {
    getActiveEventQuestions().then((resp) => {
      this.setState({
        questions: resp,
      });
    });
  }

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
            path='/leaderboard'
            exact
            component={Leaderboard}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
