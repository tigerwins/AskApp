import React from 'react';
import ReactQuill from 'react-quill';
import merge from 'lodash/merge';
import { connect } from 'react-redux';
import { createAnswer } from '../../actions/answer_actions';

class Editor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      editorHtml: ""
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

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleSubmit(e) {
    const answer = { body: this.state.editorHtml, question_id: this.props.question.id };
    this.props.createAnswer(answer);
  }

  render() {
    return (
      <div className="editor">
        <div className="editor-header">
          <img className="avatar" height="40" width="40" />
          <span className="name">{this.props.currentUser.name}</span>
        </div>
        <ReactQuill
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          placeholder="Write your answer"
          onChange={this.handleChange}>
        </ReactQuill>
        <div className="editor-footer">
          <button
            onClick={this.handleSubmit} disabled={!this.state.editorHtml}
          >
            Submit
          </button>
        </div>

      </div>
    );
  }
}

Editor.propTypes = {
  placeholder: React.PropTypes.string,
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAnswer: (answer) => dispatch(createAnswer(answer)),
  };
};


export default connect(null, mapDispatchToProps)(Editor);
