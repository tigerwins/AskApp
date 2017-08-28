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
    let comment = {
      body: this.state.commentText,
      answer_id: this.props.answerId
    };

    this.props.createComment(answer);
    this.props.expandComments();
    // this.props.closeEditor();
  }

  render() {
    return (
      <div className="comment-editor">
        <ReactQuill
          theme={ null }
          placeholder="Add a comment..."
          value={this.state.editorHtml}
          onChange={this.handleChange}>
        </ReactQuill>
        <button onClick={this.handleSubmit}>
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

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createComment: (comment) => dispatch(createComment(comment)),
  };
};

export default connect(null, mapDispatchToProps)(CommentEditor);
