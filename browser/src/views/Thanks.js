import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Thanks extends Component {
  render() {
    return (
      <div className="mt-5 text-center thanksContainer">
        <h1> Thank you for playing! </h1>
        <p className="m-3">
            At vero eos et accusamus et iusto odio dignissimos ducimus deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
        <Button className="mt-5">Visit our website</Button>
      </div>
    );
  }
}

export default Thanks;
