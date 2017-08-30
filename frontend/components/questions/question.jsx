import React from 'react';
import EditQuestionModal from '../questions/edit_question_modal_container';
import ReactQuill from 'react-quill';
import Editor from '../answers/editor';
import DetailTopicList from '../topics/detail_topic_list';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayEditor: false,
    };

    this.editQuestion = this.editQuestion.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  editQuestion() {
    this.props.toggleModal(
      <EditQuestionModal question={this.props.question}/>
    );
  }

  answerQuestion(e) {
    this.setState({ displayEditor: true });
  }

  closeEditor(e) {
    this.setState({
      displayEditor: !this.state.displayEditor
    });
  }

  renderErrors() {
    const errorList = this.props.errors.map((error, i) => (
      <li key={`error-${i}`}>
        {error}
      </li>
    ));

    if (errorList.length > 0) {
      return (
        <ul className="errors">
          {errorList}
        </ul>
      );
    }
  }

  render() {
    const { question, asker } = this.props;

    if (!question) {
      return null;
    }

    return (
      <div className="question">
        <div className="answer-errors">
          {this.renderErrors()}
        </div>

        <div className="question-topic-tags">
          <DetailTopicList />
        </div>
        <div className="question-text">
          <span className="question-detail-body">
            {question.body}
          </span>
          <span className="asker">
            Asked by {asker.name}
          </span>
        </div>

        <div className="action-bar">
          <div className="answer-btn" onClick={this.answerQuestion}>
            <span className="pen-icon">
              <img width="12" height="12" src={window.images.pen} />
            </span>
            <span>
              Answer
            </span>
          </div>

          <div className="edit-question" onClick={this.editQuestion}>
            <span className="edit-question-link">
              Edit Question
            </span>
          </div>

        </div>

        { this.state.displayEditor &&
          <Editor
            currentUser={ this.props.currentUser }
            question={ this.props.question }
            closeEditor={ this.closeEditor }
            actionType="create" />
        }
      </div>
    );
  }
}

export default Question;
