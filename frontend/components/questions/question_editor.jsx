import React from 'react';
import ReactQuill from 'react-quill';
import merge from 'lodash/merge';
import { connect } from 'react-redux';
import { createQuestion, updateQuestion } from '../../actions/question_actions';

class QuestionEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionText: props.questionText,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(question) {
    if (question === "<p><br></p>") {
      this.setState({ questionText: "" });
    } else {
      this.setState({ questionText: question });
    }
  }

  handleSubmit(e) {
    const question = {
      body: this.state.questionText,
    };

    this.props.createQuestion(question);
    this.setState({ questionText: "" });
  }

  render() {
    return (
      <div className="comment-editor">
        <div className="editor-wrapper">
          <ReactQuill
            theme={ null }
            placeholder="What is your question?"
            value={this.state.questionText}
            onChange={this.handleChange}
            width="318"
            >
          </ReactQuill>
        </div>

        <button
          className="submit-btn"
          onClick={this.handleSubmit}
          disabled={!this.state.questionText}>
          Comment
        </button>
      </div>
    );
  }
}

QuestionEditor.propTypes = {
  placeholder: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createQuestion: (comment) => dispatch(createQuestion(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor);
