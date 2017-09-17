import React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Avatar from 'react-avatar';

const Comment = (props) => {
  const date = new Date(Date.parse(props.comment.created_at)).toDateString();
  const { user, comment } = props;

  return (
    <li className="comment">
      <Avatar className="comment-avatar" name={user.name} size={27} round={true} textSizeRatio={2} />

      <div className="comment-text">
        <div className="comment-header">
          <span className="user">{user.name}</span>
          { props.currentUser.id === user.id &&
            <span
              className="delete-comment action-link"
              onClick={props.deleteComment}
              >
              Delete Comment
            </span>
          }
        </div>
        <span className="timestamp comment-timestamp">{date}</span>
        <span className="comment-body">
          {ReactHtmlParser(comment.body)}
        </span>
      </div>
    </li>
  );
};

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

export default connect(mapStateToProps, null)(Comment);
