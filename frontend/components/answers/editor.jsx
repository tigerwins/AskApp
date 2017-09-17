import React from 'react';
import ReactQuill from 'react-quill';
import merge from 'lodash/merge';
import { connect } from 'react-redux';
import { createAnswer, updateAnswer } from '../../actions/answer_actions';
import Avatar from 'react-avatar';

class Editor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editorHtml: props.textHtml
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image']
      ],
    };

    this.formats = [
      'header',
      'bold', 'italic', 'underline', 'blockquote',
      'list', 'bullet',
      'link', 'image'
    ];
  }

  handleChange(htmlText) {
    if (htmlText === "<p><br></p>") {
      this.setState({ editorHtml: "" });
    } else {
      this.setState({ editorHtml: htmlText });
    }
  }

  handleSubmit(e) {
    let answer = { body: this.state.editorHtml, question_id: this.props.question.id };

    if (this.props.actionType === "edit") {
      answer = merge(this.props.answer, answer);
      this.props.updateAnswer(answer);
    } else {
      this.props.createAnswer(answer);
    }

    this.props.closeEditor();
  }

  render() {
    const { currentUser, closeEditor } = this.props;

    return (
      <div className="answer-editor">
        <div className="editor-header">
          <Avatar className="editor-avatar" name={currentUser.name} size={40} round={true}
            textSizeRatio={2} />
          <span className="name">{currentUser.name}</span>
        </div>
        <ReactQuill
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          placeholder="Write your answer"
          value={this.state.editorHtml}
          onChange={this.handleChange}>
        </ReactQuill>
        <div className="editor-footer">
          <button
            className="submit-btn"
            onClick={this.handleSubmit} disabled={!this.state.editorHtml}
          >
            Submit
          </button>
          <span className="action-link" onClick={closeEditor}>
            Cancel
          </span>
        </div>

      </div>
    );
  }
}

Editor.propTypes = {
  placeholder: React.PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    updateAnswer: (answer) => dispatch(updateAnswer(answer)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Editor);
