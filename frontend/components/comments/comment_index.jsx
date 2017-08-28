import React from 'react';
import CommentEditor from './comment_editor';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: props.expanded,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ expanded: nextProps.expanded });
  }

  renderComments() {
    const self = this;
    return Object.keys(this.props.comments).map(id => {
      return (
        <li className="comment" key={`comment-${id}`}>
          <img width="27" height="27" />
          <span className="comment-text">{ self.props.comments[id].body }</span>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="comment-index">
        <div className="comment-action-bar">
          <img className="avatar" width="27" height="27" />
          <CommentEditor
            expandComments={ this.props.expandComments }
            answerId={ this.props.answerId }
            />
        </div>

        <div className="comments-list">
          { this.state.expanded ? (
            <div className="expanded-comments">
              <ul className="comment-list">
                { this.renderComments() }
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
