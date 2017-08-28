import React from 'react';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import CommentIndexContainer from '../comments/comment_index_container';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // expanded: false,
      displayComments: false,
    };

    // this.expandAnswer = this.expandAnswer.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
  }

  // expandAnswer(e) {
  //   this.setState({ expanded: true });
  // }
  //
  toggleComments(e) {
    this.setState({ displayComments: !this.state.displayComments });
  }

  render() {
    const { author, answer } = this.props;
    const date = new Date(Date.parse(answer.created_at)).toDateString();

    return (
      <div className="answer">
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
        {/*  { this.state.expanded || short ? ( */}
            <div className="answer-body-full">
              { ReactHtmlParser(answer.body) }
            </div>
        {/*  ) : (
            <div className="answer-body-preview" onClick={this.expandAnswer}>
              <p className="answer-body">
                { ReactHtmlParser(preview) }

              </p>
            </div>
          )} */}
        </div>

        <div className="answer-footer">
          <div className="answer-action-bar">
            <button className="upvote">
              Upvote {/* need number of upvotes */}
            </button>
          </div>

          <div className="comment-box">
            <CommentIndexContainer
              answerId={ answer.id }
              expanded={ this.state.displayComments } />

            <div className="expand-comment-link">
              { this.state.displayComments ? (
                <span className="action-link" onClick={this.toggleComments}>
                  Hide Comments
                </span>
              ) : (
                <span className="action-link" onClick={this.toggleComments}>
                  All Comments
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    author: state.entities.users[ownProps.answer.author_id],
  };
};

export default connect(mapStateToProps, null)(Answer);
