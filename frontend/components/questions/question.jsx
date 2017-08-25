import React from 'react';
import EditQuestionModal from '../questions/edit_question_modal_container';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.editQuestion = this.editQuestion.bind(this);
  }

  editQuestion() {
    this.props.toggleModal(
      <EditQuestionModal question={this.props.question}/>
    );
  }

  render() {
    const { question } = this.props;
    if (!question) {
      return null;
    }

    return (
      <div className="question">
        <div className="question-topic-tags">
          <span className="topics">
            { /* question header for topic tag(s) */ }
            <span className="topic">
              Topic tags go here
            </span>
          </span>
        </div>
        <div className="question-text">
          <span className="question-detail-body">
            {question.body}
          </span>
        </div>
        <div className="action-bar">
          <div className="answer-btn">
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
      </div>
    );
  }
}

export default Question;
