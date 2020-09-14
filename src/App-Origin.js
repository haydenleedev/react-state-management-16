import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      username: "",
    },
    users: [],
    usernameValidation: false,
    isToggleOn: false,
  };

  firstNameHandleChange = (event) => {
    const user = { ...this.state.user };
    user.firstName = event.target.value;
    this.setState({ user });
  };
  lastNameHandleChange = (event) => {
    const user = { ...this.state.user };
    user.lastName = event.target.value;
    this.setState({ user });
  };
  usernameeHandleChange = (event) => {
    const user = { ...this.state.user };
    user.username = event.target.value;
    this.setState({ user });
  };
  inputIsEmpty = () => {
    return this.state.user.username === "";
  };
  toggleHandle = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };
  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.usernameValidation()) {
      const userValidation = document.querySelector(".username-validation");
      if (userValidation) {
        userValidation.remove();
      }

      this.setState((prevState) => ({
        users: [...prevState.users, this.state.user],
      }));
    } else {
      document
        .querySelector("form")
        .insertAdjacentHTML(
          "beforeend",
          '<p class="error">You cannot add a user that already exists.</p>'
        );
    }
  };
  usernameValidation = (event) => {
    let result = false;
    for (let user of this.state.users) {
      user.username === this.state.user.username
        ? (result = true)
        : (result = false);
    }
    return result;
  };

  render() {
    const numberOfGames = () => 0;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div>
          <h1 className="App-title">Users</h1>

          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              value={this.state.user.firstName}
              onChange={this.firstNameHandleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={this.state.user.lastName}
              onChange={this.lastNameHandleChange}
            />
            <input
              type="text"
              placeholder="User Name"
              value={this.state.user.username}
              onChange={this.usernameeHandleChange}
            />
            <button
              disabled={this.inputIsEmpty()}
              onClick={this.usernameValidation}
            >
              Add
            </button>
          </form>

          <button onClick={this.toggleHandle}>
            {this.state.isToggleOn
              ? "Show the Number of Games Played"
              : "Hide the Number of Games Played"}
          </button>
          <div>
            <ol className="item-list">
              {this.state.users.map((user) => (
                <li key={user}>
                  {user.firstName} {user.lastName} - {user.username}
                  <p>
                    The number of games played:{" "}
                    {!this.state.isToggleOn ? "0" : ""}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
