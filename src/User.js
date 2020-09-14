import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
We can make this a Stateless Functional Component because this element doesn't
need to hold its own state.
*/
class User extends Component {

  render() {

    return (
    
    <li key={this.props.username}>{this.props.firstName} {this.props.lastName} - {this.props.username}
		<p>The number of games played: {this.props.toggleOn ? "0" : ""}</p>
	</li>

    );
  }
}


User.propTypes = {
  showGamesPlayed: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default User;
