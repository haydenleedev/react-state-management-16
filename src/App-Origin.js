import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
     user: {
      firstName: '',
      lastName: '',
      username: '',
      },
     users: [],
     usernameValidation: false,
  };

firstNameHandleChange = event => {
  const user = {...this.state.user};
  user.firstName= event.target.value;
  this.setState({user});
};
lastNameHandleChange = event => {
   const user = {...this.state.user};
  user.lastName= event.target.value;
  this.setState({user});
};
usernameeHandleChange = event => {
  const user = {...this.state.user};
  user.username= event.target.value;
  this.setState({user});
  
  this.state.users.map( user => (
     (user.username === this.state.user.username)
         ? this.setState({usernameValidation: true})
         : this.setState({usernameValidation: false})
   ));
};
inputIsEmpty = () => {
  return this.state.user.username === '';
};
addItem = (event) => {
 event.preventDefault();
  this.setState((prevState) => ({
    users: [...prevState.users, this.state.user],
  }));
};
usernameValidation = (event) => {
     return (this.state.usernameValidation === true)
         ? true
         : false

};

  render() {
    const numberOfGames = () => 0;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<form onSubmit={this.addItem}>
			<input 
				type="text"
				placeholder = "First Name"
				value = {this.state.user.firstName}
				onChange={this.firstNameHandleChange}
			/>
			<input type="text"
				placeholder = "Last Name"
				value = {this.state.user.lastName}
				onChange={this.lastNameHandleChange}
			/>
			<input type="text"
				placeholder = "User Name"
				value = {this.state.user.username}
				onChange={this.usernameeHandleChange}
			/>
			<button disabled={(this.inputIsEmpty() || (this.usernameValidation()))} onClick = {this.usernameValidation}>Add</button>
		</form>

			<p className="items">Users</p>
			<ol className="item-list">
              {this.state.users.map((user) => (
                  <li key={user}>{user.firstName} {user.lastName} - {user.username}
					<p>The number of games played: {numberOfGames()}</p>
				</li>
               ))}
			</ol>
      </div>
    );
  }
}

export default App;
