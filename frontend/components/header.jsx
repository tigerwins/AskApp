import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.logout();
  }


  // render will include logo, read/answer/notification tabs,
  // search bar, profile icon, and ask question button
  render() {

    return (
      <nav>
        <h1>Ask()</h1>
        <button onClick={this.handleLogout}>Logout</button>
      </nav>
    );
  }
}

export default Header;
