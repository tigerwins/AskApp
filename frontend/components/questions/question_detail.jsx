import React from 'react';
import QuestionContainer from './question_container';
import AnswerIndexContainer from '../answers/answer_index_container';
import RelatedQuestions from '../content/related_questions';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestQuestion(this.props.questionId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.requestQuestion(nextProps.questionId);
    }
  }

  render() {
    const { question, asker } = this.props;
    return (
      <div className="detail-page">
        <div className="content-wrapper">
          <div className="question-detail">
            <QuestionContainer
              question={question}
              asker={asker}
              />
            <AnswerIndexContainer question={question} />
          </div>
          <RelatedQuestions question={question} />
        </div>
      </div>
    );
  }
}

export default QuestionDetail;
