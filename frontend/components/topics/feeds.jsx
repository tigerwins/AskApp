import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
// import * as TopicAPIUtil from '../../util/topic_api_util';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.topics = [];
  }

  componentDidMount() {
    // debugger
    // TopicAPIUtil.fetchTopics().then(topics => {
      // this.topics = topics;
    // });
  }

  renderFeeds() {

  }

  render() {
    // debugger
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

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Feeds));
