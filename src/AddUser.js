import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddUser extends Component {
  state = {
     user: {
      firstName: '',
      lastName: '',
      username: '',
      },
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
  
};
inputIsEmpty = () => {
  return this.state.user.username === '';
};

sendData = () => {
         this.props.parentCallback(this.state.user);
    };

 handleSubmit = (event) => {
    event.preventDefault();

    if (!this.usernameValidation()) {
      const userValidation = document.querySelector(".username-validation");
      if (userValidation) {
        userValidation.remove();
      }

	this.sendData();
      
    } else {
      const errorMessage = document.querySelector('.error');
      if(!errorMessage) {
      document
        .querySelector("form")
        .insertAdjacentHTML(
          "beforeend",
          '<p class="error">You cannot add a user that already exists.</p>'
        );
      }
    }
  };

usernameValidation = (event) => {
  let result = false;
  for (let user of this.props.users) {
     (user.username === this.state.user.username)
         ? result = true
         : result = false
  }
  return result
};

  render() {

    return (
      <div>
      
       <h1 className="App-title">Users</h1>
		<form onSubmit={this.handleSubmit}>
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
			<button disabled={this.inputIsEmpty()} onClick={this.usernameValidation}>Add</button>
		</form>

      </div>
    );
  }
}

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
};

export default AddUser;
