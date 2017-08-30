import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class Feeds extends React.Component {
  constructor(props) {
    super(props);

  }

  renderFeeds() {
    
  }

  render() {
    return (
      <div className="feeds-sidebar">
        <div className="feeds-header">
          <h4>Feeds</h4>
          <span className="edit">Edit</span>
        </div>

        <div className="feed-list">
          <NavLink exact={true} to="/" activeClassName="selected-feed">
            <div className="feed">
              Top Stories
            </div>
          </NavLink>
          <NavLink to="/answer" activeClassName="selected-feed">
            <div className="feed">
              New Questions
            </div>
          </NavLink>
          <NavLink exact={true} to="/topics/1" activeClassName="selected-feed">
            <div className="feed">
              Food
            </div>
          </NavLink>
          <NavLink exact={true} to="/topics/2" activeClassName="selected-feed">
            <div className="feed">
              Science
            </div>
          </NavLink>
          <NavLink exact={true} to="/topics/3" activeClassName="selected-feed">
            <div className="feed">
              History
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Feeds);
