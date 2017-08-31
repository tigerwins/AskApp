import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.retrieveFeedTopics();
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
              Technology
            </div>
          </NavLink>
          <NavLink exact={true} to="/topics/2" activeClassName="selected-feed">
            <div className="feed">
              Science
            </div>
          </NavLink>
          <NavLink exact={true} to="/topics/3" activeClassName="selected-feed">
            <div className="feed">
              Money
            </div>
          </NavLink>
          <NavLink exact={true} to="/topics/4" activeClassName="selected-feed">
            <div className="feed">
              History
            </div>
          </NavLink>
          <NavLink exact={true} to="/topics/5" activeClassName="selected-feed">
            <div className="feed">
              Hypothetical Scenarios
            </div>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Feeds;

// const mapStateToProps = (state) => {
//   return {
//
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//
//   };
// };
//
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feeds));
