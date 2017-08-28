import React from 'react';
import QuestionPrompt from './question_prompt';
import QuestionIndexItemContainer from './question_index_item_container';
import CreateQuestionModal from './create_question_modal_container';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);

    this.askQuestion = this.askQuestion.bind(this);
  }

  componentDidMount() {
    this.props.requestQuestions();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.props.requestQuestions();
  // }

  askQuestion(e) {
    this.props.toggleModal(<CreateQuestionModal />);
  }

  render() {
    const { questions, currentUser, createQuestion } = this.props;

    const questionList = questions.map(question => (
      <li className="index-box" key={question.id}>
        <QuestionIndexItemContainer
          question={ question }
          />
      </li>
    ));

    return (
      <div className="question-index-container index-container">
        <QuestionPrompt
          currentUser={ this.props.currentUser }
          askQuestion={ this.askQuestion }
        />

        <ul className="question-feed">
          { questionList.reverse() }
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
