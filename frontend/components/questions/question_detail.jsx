import React from 'react';
import Question from './question';
import AnswerIndexContainer from '../answers/answer_index_container';
import RelatedQuestions from '../content/related_questions';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestQuestion(this.props.questionId);
  }

  render() {
    const { question } = this.props;
    return (
      <div className="detail-page">
        <div className="content-wrapper">
          <div className="question-detail">
            <Question question={question} />
            <AnswerIndexContainer question={question} />
          </div>
          <RelatedQuestions question={question} />
        </div>
      </div>
    );
  }
}

export default QuestionDetail;
