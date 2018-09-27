import React, { Component } from 'react'

export default class SignIn extends Component {
  
  state = {
    username: "",
    password: ""
  };

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  login = () => {};
  
  render() {
    return (
      <div>
        Signin skeleton
      </div>
    )
  }
}
