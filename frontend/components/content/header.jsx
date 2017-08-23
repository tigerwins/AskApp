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
      <nav className="header">
        <h2 className="logo">Ask(<span className="logo-space"> </span>)</h2>
        <button className="logout-btn" onClick={this.handleLogout}>Logout</button>
      </nav>
    );
  }
}

export default Header;
