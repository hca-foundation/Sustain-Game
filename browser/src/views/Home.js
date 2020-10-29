import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

export default class Home extends Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    zip: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify(this.state));
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="fname">First Name <span className="form-required">*</span></Label>
          <Input onChange={this.handleChange} type="text" name="fname" id="fname" placeholder="First Name" required/>
        </FormGroup>
        <FormGroup>
          <Label for="lname">Last Name <span className="form-required">*</span></Label>
          <Input onChange={this.handleChange} type="text" name="lname" id="lname" placeholder="Last Name" required/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email <span className="form-required">*</span></Label>
          <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="youremail@email.com" required/>
        </FormGroup>
        <FormGroup>
          <Label for="lname">Zip Code (Optional)</Label>
          <Input onChange={this.handleChange} type="number" pattern="[0-9]*" name="zip" id="zip" placeholder="Zip Code" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
