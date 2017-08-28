import React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

const Comment = (props) => {
  const date = new Date(Date.parse(props.comment.created_at)).toDateString();
  const { user, comment } = props;

  return (
    <li className="comment">
      <img className="avatar" width="27" height="27" />

      <div className="comment-text">
        <div className="comment-header">
          <span className="user">{ user.name }</span>
          { props.currentUser.id === user.id &&
            <span
              className="delete-comment action-link"
              onClick={props.deleteComment}
              >
              Delete Comment
            </span>
          }
        </div>
        <span className="timestamp comment-timestamp">{ date }</span>
        <span className="comment-body">
          { ReactHtmlParser(comment.body) }
        </span>
      </div>
    </li>
  );
};

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  }
}

export default connect(mapStateToProps, null)(Comment);
