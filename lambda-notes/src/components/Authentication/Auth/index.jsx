import React from "react";
import Login from '../SignIn';

const Auth = App =>
class extends React.Component {
  state = {
    autenticated: false,
    username: ""
  }

  componentDidMount() {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this.setState({
        authenticated: true, username: localStorage.getItem('username')
      });
    } else {
      this.setState({
        authenticated: false
      });
    }
  }

  render() {}
};

export default Auth;