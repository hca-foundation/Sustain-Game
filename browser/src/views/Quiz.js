import React, { Component } from 'react';
import getActiveEvent from '../data/getActiveEvent';
import Question from '../components/Question';
import Answers from '../components/Answers';

export default class Quiz extends Component {
  state = {
    questions: [],
    timer: 0,
    score: 0,
    count: 0,
  };

  componentDidMount() {
    getActiveEvent().then((resp) => {
      this.setState({
        questions: resp[0].questions,
        count: resp[0].timer * 60 / resp[0].questions.length,
        timer: resp[0].timer * 60 / resp[0].questions.length,
      }, this.handleStart);
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  format = (time) => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
    seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
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
    });
  };

  runIt = (id, qpoints) => {
    if (this.state.questions.length > Number(id) + 1) {
      const bonusPoints = this.state.questions[id].value + (this.state.count * 100);
      const score = qpoints ? bonusPoints : 0;
      this.setState({
        score: this.state.score + score,
        count: this.state.timer,
      });

      if (qpoints) {
        <CorrectAnswer question={this.state.questions[id]} />;
        this.props.history.push(`./answer/${Number(id)}`);
      }
      // this.props.history.push(`./answer/${Number(id) + 1}`);
    } else {
      localStorage.setItem('score', JSON.stringify(this.state.score));
      this.props.history.push('/score');
    }
  };

  renderonDOM = () => {
    const some = this.state.count > 0 ? (
        <>
          {this.state.questions.length > 0 ? this.renderQuestion() : 'Loading'}
          <h1 className='crazyTimer'>{this.format(this.state.count)}</h1>
          {this.state.questions.length > 0 && <div className='answer-column'>
          <Answers a={this.state.questions[this.props.match.params.id].answers} click={this.runIt} id={this.props.match.params.id} /></div>}
        </>) : <CorrectAnswer question={this.state.questions[this.props.match.params.id]} />;
    return some;
  };

  renderQuestion = () => {
    const view = (this.state.questions.length - 1 >= this.props.match.params.id) ? (<Question question={this.state.questions[this.props.match.params.id]} />) : this.props.history.push('/score');
    return view;
  };

  render() {
    return (
      <div>
        <div className="quiz-header">
        <div>{Number(this.props.match.params.id) + 1} / {this.state.questions.length}</div>
        <div>{this.state.score}pts</div>
        </div>
        <div className='container'>{this.state.count > 0 && this.renderonDOM()}</div>
      </div>
    );
  }
}

function CorrectAnswer(props) {
  console.warn(props.question);
}
