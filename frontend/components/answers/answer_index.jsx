import React from 'react';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { answers, users, question } = this.props;
    const answerList = Object.keys(answers).map(id => {
      return (
        <li key={`answer-${id}`}>
          <AnswerIndexItem
            answer={answers[id]}
            author={users[answers[id].author_id]}
            question={question}
          />
        </li>
      );
    });

    return (
      <div className="answer-index-container">
        <div className="answer-index-header">
          {Object.keys(answers).length} Answers
        </div>
        <ul className="answer-index">
          {answerList.reverse()}
        </ul>
      </div>
    );
  }
}

export default AnswerIndex;
