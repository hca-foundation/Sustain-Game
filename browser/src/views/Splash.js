import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';
import Modal from '../components/Modal';

export default class Splash extends Component {
  render() {
    return (
      <div>
        <h1>Splash Screen</h1>
        <p>Design and customization will happen in the UI design phase</p>
        <Link to='/info' className='btn btn-success'>Play the Game</Link>
        <Modal buttonLabel={'How to Play'}/>
      </div>
    );
  }
}
