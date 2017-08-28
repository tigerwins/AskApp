import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { deleteAnswer } from '../../actions/answer_actions';
import CommentIndexContainer from '../comments/comment_index_container';
import Editor from './editor';

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayEditor: false,
    };

    this.editAnswer = this.editAnswer.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
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

  render() {
    const { author, answer, currentUser } = this.props;
    const date = new Date(Date.parse(answer.created_at)).toDateString();

    return (
      <div className="answer-index-item">
        { !this.state.displayEditor ? (
          <div className="display-answer">
            <div className="answer-header">
              <div className="avatar">
                {/* PROFILE AVATAR GOES HERE */}
                <img height="40" width="40" />
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
                    <button className="upvote">
                      Upvote {/* need number of upvotes */}
                    </button>
                    <span className="edit action-link" onClick={this.editAnswer}>
                      Edit Answer
                    </span>
                    <span className="delete action-link" onClick={this.deleteAnswer}>
                      Delete Answer
                    </span>
                  </div>
                ) : (
                  <div className="answer-action-bar">
                    <button className="upvote">
                      Upvote {/* need number of upvotes */}
                    </button>
                  </div>
                )}

              <div className="comment-box">
                <CommentIndexContainer
                  answerId={ answer.id }
                  expanded={ false } />
              </div>
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

const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAnswer: (answer) => dispatch(deleteAnswer(answer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerIndexItem);
