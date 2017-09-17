import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { deleteAnswer } from '../../actions/answer_actions';
import { clearErrors } from '../../actions/session_actions';
import CommentIndexContainer from '../comments/comment_index_container';
import Editor from './editor';
import Avatar from 'react-avatar';
import { allAnswers } from '../../reducers/selectors';
import {
  createUpvote,
  deleteUpvote
} from '../../actions/upvote_actions';

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayEditor: false,
    };

    this.editAnswer = this.editAnswer.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
  }

  editAnswer(e) {
    this.setState({ displayEditor: true });
  }

  deleteAnswer(e) {
    this.props.deleteAnswer(this.props.answer);
  }

  closeEditor(e) {
    this.setState({ displayEditor: false });
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
      <div className="answer-index-item">
        { !this.state.displayEditor ? (
          <div className="display-answer">
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
              { ReactHtmlParser(answer.body) }
            </div>
            <div className="answer-footer">

                { author.id === currentUser.id ? (
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
                    <span className="edit action-link" onClick={this.editAnswer}>
                      Edit Answer
                    </span>
                    <span className="delete action-link" onClick={this.deleteAnswer}>
                      Delete Answer
                    </span>
                  </div>
                ) : (
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
                )}

            </div>
            <div className="comment-box answer-index-comment-box">
              <CommentIndexContainer answerId={ answer.id } />
            </div>
          </div>
        ) : (
          <div className="display-editor">
            <Editor
              currentUser={ currentUser }
              question={ this.props.question }
              closeEditor={ this.closeEditor }
              textHtml={ answer.body }
              answer={ answer }
              actionType="edit"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { users } = state.entities;
  const { currentUser } = state.session;
  const answers = allAnswers(state, ownProps.question.id);
  const upvoteCss = currentUser.upvotedAnswers.includes(ownProps.answer.id) ? "upvoted" : "not-upvoted";

  return {
    currentUser: state.session.currentUser,
    upvoteCss,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAnswer: (answer) => {
      dispatch(clearErrors());
      dispatch(deleteAnswer(answer));
    },
    createUpvote: (upvote) => dispatch(createUpvote(upvote)),
    deleteUpvote: (upvote) => dispatch(deleteUpvote(upvote)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndexItem);
