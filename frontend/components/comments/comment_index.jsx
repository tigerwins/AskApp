import React from 'react';
import CommentEditor from './comment_editor';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: Boolean(props.expanded),
    };

    this.expandComments = this.expandComments.bind(this);
  }

  expandComments(e) {
    this.setState({ expanded: true });
  }

  renderComments() {
    return Object.keys(this.props.comments).map(id => {
      return (
        <li className="comment" key={`comment-${id}`}>
          <img width="27" height="27" />
          <span className="comment-text">{ comments[id].body }</span>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="comment-index" onClick={this.expandComments}>
        <img className="avatar" width="27" height="27" />
        <CommentEditor
          expandComments={ this.expandComments }
          answerId={ this.props.answerId }
          />
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
    );
  }
}

export default CommentIndex;
