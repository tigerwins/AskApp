import React from 'react';
import QuestionPrompt from './question_prompt';
import QuestionIndexItemContainer from './question_index_item_container';

class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    // window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.match.params.id !== nextProps.match.params.id) {
    //   window.scrollTo(0, 0);
    // }
  }

  render() {
    const { questions } = this.props;
    const questionList = questions.map(question => (
      <li className="index-box" key={question.id}>
        <QuestionIndexItemContainer question={ question } />
      </li>
    ));

    return (
      <div className="">
        <ul className="question-feed">
          { questionList.reverse() }
        </ul>
      </div>
    );
  }
}

export default QuestionIndex;
