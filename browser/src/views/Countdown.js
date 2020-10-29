import React, { Component } from 'react';

export default class Countdown extends Component {
  state = {
    count: 3,
    running: true,
  };

  componentDidMount() {
    this.handleStart();
  }

  format = (time) => {
    const seconds = time % 60;
    return `${seconds}`;
  };

  handleStart = () => {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({ count: newCount >= 0 ? newCount : 0 });
    }, 1000);
  };

  handleCountdown = (seconds) => {
    this.setState({
      count: seconds,
      running: true,
    });
  };

  renderonDOM = () => {
    const some = this.state.count > 0 ? <><h1 className='crazyTimer'>{this.format(this.state.count)}</h1><button disabled>This is something</button></> : <><h1>0</h1><button>This is something</button></>;
    return some;
  };

  render() {
    return <div className='container'>{this.renderonDOM()}</div>;
  }
}
