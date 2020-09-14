import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends Component {
  state = {
    isToggleOn: false,
  };

  toggleHandle = () => {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  };

  render() {
    return (
    
    <div>
      <button onClick={this.toggleHandle}>{this.state.isToggleOn ? "Show" : "Hide"} the Number of Games Played</button>

		<div>
			<ol className="item-list">
              {this.props.users.map((user) => (
                 <User toggleOn={!this.state.isToggleOn} firstName={user.firstName}  lastName={user.lastName}  username={user.username}/>
               ))}
			</ol>
	  </div>
	</div>

    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
