# Game Timer

Here is a sample implementation of a timer:

```javascript
import React from 'react'
import { Redirect } from "react-router-dom";

export default class Timer extends React.Component {
    state = {
        count: this.props.userInputedTime,
        running: true,
      }
    
    componentDidMount() {
        this.handleStart();
    }
    
    format = (time) => {
        let seconds = time % 60;
        let minutes = Math.floor(time / 60);
        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        return minutes + ':' + seconds;
      }

    handleStart = () => {
      this.timer = setInterval(() => {
        this.props.getTime(this.state.count)
        const newCount = this.state.count - 1;
        this.setState(
          {count: newCount >= 0 ? newCount : 0}
        );
      }, 1000);
    }
    
    handleCountdown = (seconds) => {
      this.setState({
        count: seconds,
        running: true
      })
    }

    renderonDOM = () => {
        if (this.state.count > 0){
            return (<h1 className="crazyTimer">{this.format(this.state.count)}</h1>)
        } else {
            // example to submit the form once the timer ends
            this.props.submitIt();
            return (
                return <Redirect to='/score'/>
            )
        }
    }
    
    render() {
      return (
        <div className="container">
          {this.renderonDOM()}
        </div>
      )
    }
  }
```