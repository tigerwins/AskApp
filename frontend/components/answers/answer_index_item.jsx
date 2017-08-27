import React from 'react';
import { connect } from 'react-redux';
import Editor from './editor';
import { deleteAnswer } from '../../actions/answer_actions';

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
    // debugger
    return (
      <div className="answer-index-item">
        { !this.state.displayEditor ? (
          <div className="display-answer">
            <div className="answer-header">
              <div className="avatar">
                {/* PROFILE AVATAR GOES HERE */}
              </div>
              <div className="answer-info">
                <span className="author">{author.name}</span>
                {/* NEED TO CONVER  T TO DATE */}
                <span className="timestamp">Answered on {answer.created_at}</span>
              </div>
            </div>

            <div className="answer-content">
              { answer.body }
            </div>
            <div className="answer-footer">
              <div className="answer-action-bar">
                <button>
                  Upvote
                </button>

                { author.id === currentUser.id &&
                  <div className="author-actions">
                    <span className="edit action-link" onClick={this.editAnswer}>
                      Edit Answer
                    </span>

                    <span className="delete action-link" onClick={this.deleteAnswer}>
                      Delete Answer
                    </span>

                  </div>
                }
              </div>
              <div className="comment-box">
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
