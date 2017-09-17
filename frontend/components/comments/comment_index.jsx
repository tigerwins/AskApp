import React from 'react';
import CommentEditor from './comment_editor';
import Comment from './comment';
import Avatar from 'react-avatar';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayComments: false,
    };

    this.toggleComments = this.toggleComments.bind(this);
    this.expandComments = this.expandComments.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  toggleComments(e) {
    this.setState({ displayComments: !this.state.displayComments });
  }

  expandComments() {
    this.setState({ displayComments: true });
  }

  deleteComment(comment) {
    return (e) => this.props.deleteComment(comment);
  }

  renderComments() {
    const self = this;
    const { comments, users } = this.props;

    return Object.keys(comments).map(id => {

      return (
        <Comment
          key={`comment-${id}`}
          comment={comments[id]}
          user={users[comments[id].user_id]}
          deleteComment={this.deleteComment(comments[id])}
        />
      );
    });
  }

  render() {
    return (
      <div className="comment-index">
        <div className="comment-action-bar">
          <Avatar className="comment-avatar" size={27} round={true}
            name={this.props.currentUser.name}
            textSizeRatio={2} />
          <CommentEditor
            expandComments={this.expandComments}
            answerId={this.props.answerId}
            />

          <div className="expand-comment-link">
            { this.state.displayComments ? (
              <span className="action-link" onClick={this.toggleComments}>
                Hide
              </span>
            ) : (
              <span className="action-link" onClick={this.toggleComments}>
                Show
              </span>
            )}
          </div>
        </div>

        <div className="comments-list">
          { this.state.displayComments ? (
            <div className="expanded-comments">
              <ul className="comment-list">
                {this.renderComments()}
              </ul>
            </div>
          ) : (
            <div className="unexpanded-comments">
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CommentIndex;
