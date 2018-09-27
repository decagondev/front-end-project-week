import React from "react";
import SignIn from "../SignIn";
import { connect } from "react-redux";

const Auth = App =>
  class extends React.Component {
    state = {
      autenticated: false,
      username: ""
    };

    componentDidMount() {
      if (
        localStorage.getItem("username") &&
        localStorage.getItem("password")
      ) {
        this.setState({
          authenticated: true,
          username: localStorage.getItem("username")
        });
      } else {
        this.setState({
          authenticated: false
        });
      }
    }

    render() {
      if (this.state.authenticated) {
        return <App />;
      } else {
        return <SignIn />;
      }
    }
  };

export default Auth;
