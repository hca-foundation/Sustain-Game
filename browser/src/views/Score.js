import React, { Component } from 'react';
import { Button } from 'reactstrap';
import partypopper from '../images/partypopper.png';
import floatingBoxes from '../images/floatingBoxes.png';
import UglLogo from '../images/UglLogo.png';

class Score extends Component {
  render() {
    const score = localStorage.getItem('score');
    return (
        <div className="scoreContainer text-center">
          <img src={floatingBoxes} alt="" className="bg-img"/>

          <div className="score-body">
            <Button className="closeBtn" onClick={() => this.props.history.push('/thanks')}>Exit</Button>
            <img className="centerImg" src={partypopper} alt="party popper emoji" />
            <h1 className="mt-2 score">{score}<span>pts</span> </h1>
            <p className="mt-2 scoreText">YOUR SCORE</p>
            <p className="m-3">
              At vero eos et accusamus et iusto odio praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
            </p>
            <Button className="btn-dark btn" onClick={() => this.props.history.push('/initials')} >View leaderboard</Button>
          </div>

          <p>brought to you by</p>
          <img src={UglLogo} alt="urban green lab" className="ugl-logo"/>
        </div>
    );
  }
}

export default Score;
