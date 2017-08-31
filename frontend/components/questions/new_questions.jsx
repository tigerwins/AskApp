import React from 'react';
import Feeds from '../topics/feeds';
import AnswerQuestionIndex from '../answers/answer_question_index';

class NewQuestions extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestQuestions();
  }

  render() {
    return (
      <div className="answer-question-container content-wrapper">
        <Feeds />
        <div className="answer-question-index-container">
          <div className="new-questions-for-you">
            <img className="star" width="24" height="24" src={window.images.star} />
            <span className="new-questions-title">
              New Questions For You
            </span>
          </div>

          <AnswerQuestionIndex />
        </div>
      </div>
    );
  }
}

export default NewQuestions;
