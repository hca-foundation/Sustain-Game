import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import getActiveEvent from '../data/getActiveEvent';

export default class CorrectAnswer extends Component {
  state = {
    question: {},
  };

  componentDidMount() {
    getActiveEvent().then((resp) => {
      this.setState({
        question: resp[0].questions[this.props.match.params.id],
      });
    });
  }

  render() {
    return (
      <div>
        {(Object.keys(this.state.question).length !== 0 && this.state.question.constructor === Object) && <RenderDOM q={this.state.question} bp={this.props.match.params.bonus} p={this.props.match.params.points} id={this.props.match.params.id} ql={this.props.match.params.ql} />}
      </div>
    );
  }
}

function RenderDOM(props) {
  return (
    <>
      <div className="quiz-header">
        <div>{Number(props.id) + 1} / {props.ql}</div>
        <div>{props.p}pts</div>
      </div>
      <h1>{props.q.question}</h1>
      <Alert className='score-info'>
        <div className='correct-emoji'>EMOJI</div>
        <div>CORRECT {props.p} <br /> BONUS +{props.bp} for fast answer</div>
      </Alert>
    </>
  );
}
