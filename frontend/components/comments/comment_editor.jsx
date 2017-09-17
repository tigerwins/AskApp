import React from 'react';
import ReactQuill from 'react-quill';
import merge from 'lodash/merge';
import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';

class CommentEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      commentText: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(comment) {
    if (comment === "<p><br></p>") {
      this.setState({ commentText: "" });
    } else {
      this.setState({ commentText: comment });
    }
  }

  handleSubmit(e) {
    const comment = {
      body: this.state.commentText,
      answer_id: this.props.answerId
    };

    this.props.createComment(comment);
    this.setState({ commentText: "" });
    this.props.expandComments();
  }

  render() {
    return (
      <div className="comment-editor">
        <div className="editor-wrapper">
          <ReactQuill
            theme={null}
            placeholder="Add a comment..."
            value={this.state.commentText}
            onChange={this.handleChange}
            width="318"
            >
          </ReactQuill>
        </div>

        <button
          className="submit-btn comment-btn"
          onClick={this.handleSubmit}
          disabled={!this.state.commentText}>
          Comment
        </button>
      </div>
    );
  }
}

CommentEditor.propTypes = {
  placeholder: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentEditor);
