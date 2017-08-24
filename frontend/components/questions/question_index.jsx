import React from 'react';
import QuestionPrompt from './question_prompt';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return (
        <div className="question-index-container">
        <QuestionPrompt currentUser={this.props.currentUser} />

      </div>
    );
  }
}

export default QuestionIndex;
