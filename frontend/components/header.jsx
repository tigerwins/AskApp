import React from 'react';
import { logout } from '../actions/session_actions';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {

  }

  render() {

    return (
      <nav>
        <h1>Ask()</h1>
        <button onClick="">Logout</button>
      </nav>
    );
  }
}

export default Header;
