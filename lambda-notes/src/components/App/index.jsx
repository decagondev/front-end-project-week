import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";

import NoteList from "../NoteList";
import Form from "../Form";
import "./index.css";

import SideBar from "../SideBar";

class App extends Component {
  // state to track data
  state = {
    notes: [],
    title: "",
    textBody: ""
  };

  // component did mount
  componentDidMount = () => {
    this.refetchNotes();
  };

  // handle input change
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // handle form submit
  handleFormSubmit = e => {};

  // refetch notes
  refetchNotes = () => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <SideBar />

        <Route
          exact
          path="/"
          render={props => <NoteList notes={this.state.notes} />}
        />

        <Route
          path="/notes/add"
          render={props => (
            <Form
              type="new"
              title={this.state.title}
              textBody={this.state.textBody}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(App);
