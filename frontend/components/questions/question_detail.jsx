import React from 'react';
import QuestionContainer from './question_container';
import AnswerIndexContainer from '../answers/answer_index_container';

class QuestionDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestQuestion(this.props.questionId);
    document.body.classList.toggle('white-background', true);
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.requestQuestion(nextProps.questionId);
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('white-background');
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
        </div>
      </div>
    );
  }
}

export default QuestionDetail;
