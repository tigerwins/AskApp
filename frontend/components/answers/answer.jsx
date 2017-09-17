import React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import CommentIndexContainer from '../comments/comment_index_container';
import Avatar from 'react-avatar';
import {
  createUpvote,
  deleteUpvote
} from '../../actions/upvote_actions';
import { allAnswers } from '../../reducers/selectors';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.handleUpvote = this.handleUpvote.bind(this);
  }

  handleUpvote(e) {
    e.preventDefault();
    const { currentUser, answer } = this.props;
    let upvote;

    if (currentUser.upvotedAnswers.includes(answer.id)) {
      upvote = { userId: currentUser.id, answerId: answer.id };
      this.props.deleteUpvote(upvote);
    } else {
      upvote = { answer_id: this.props.answer.id };
      this.props.createUpvote(upvote);
    }
  }

  render() {
    const { author, answer, currentUser, upvoteCss } = this.props;
    const date = new Date(Date.parse(answer.created_at)).toDateString();

    return (
      <div className="answer">
        <div className="answer-header">
          <div className="avatar">
            <Avatar name={ author.name } size={40} round={true} textSizeRatio={2} />
          </div>
          <div className="answer-info">
            <span className="author">{author.name}</span>
            <span className="timestamp">Answered on { date }</span>
          </div>
        </div>

        <div className="answer-content">
          <div className="answer-body-full">
            { ReactHtmlParser(answer.body) }
          </div>
        </div>

        <div className="answer-footer">
          <div className="answer-action-bar">
            <span
              onClick={this.handleUpvote}
              className={`${upvoteCss} upvote`}
            >
            { upvoteCss === "not-upvoted" ? (
              <span className="upvote-text">Upvote</span>
            ) : (
              <span className="upvote-text">Upvoted</span>
            )}
            <span className="upvote-count">
              { this.props.answer.num_upvotes }
            </span>
          </span>
          </div>

          <div className="comment-box home-page-comment-box">
            <CommentIndexContainer answerId={ answer.id } />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { users } = state.entities;
  const { currentUser } = state.session;
  const answers = allAnswers(state, ownProps.questionId);
  const answer = answers[answers.length - 1];
  const upvoteCss = currentUser.upvotedAnswers.includes(answer.id) ? "upvoted" : "not-upvoted";

  return {
    currentUser,
    answer,
    author: users[answer.author_id],
    upvoteCss,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createUpvote: (upvote) => dispatch(createUpvote(upvote)),
    deleteUpvote: (upvote) => dispatch(deleteUpvote(upvote)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Answer);
