import React from 'react';
import QuestionPrompt from './question_prompt';
import Question from './question';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);

    this.askQuestion = this.askQuestion.bind(this);
  }

  componentDidMount() {
    this.props.requestQuestions();
  }

  askQuestion(e) {

  }




  render() {
    const { questions, currentUser, createQuestion } = this.props;

    const questionList = questions.map(question => (
      <Question
        key={ question.id }
        question={ question }
      />
    ));

    return (
      <div className="question-index-container">
        <QuestionPrompt
          currentUser={ this.props.currentUser }
          createQuestion={ createQuestion }
        />

        <ul className="question-feed">
          { questionList }
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
