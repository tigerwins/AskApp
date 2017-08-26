import React from 'react';
import { Link } from 'react-router-dom';
import Answer from '../answers/answer';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAnswer: false,
    };
  }

  componentDidMount() {
    // fetch answer with the most upvotes?
    // until upvotes are implemented, fetch the first answer w/ selector
  }

  expandAnswer(e) {

  }

  render() {
    const { question } = this.props;

    return (
      <div className="question-index-item">
        <div className="question-topic-tags">
          <ul className="topics">
            { /* question header for topic tag(s) */ }
            Topic tags go here
          </ul>
        </div>
        <div className="question-text">
          <div className="question-body-text">
            <Link to={`/questions/${question.id}`}>
              <span className="question-body">
                {question.body}
              </span>
            </Link>
          </div>

          <div className="answer">
            Answer goes here
            <Answer />
          { /* PROP: answer={this.props.question.answers.last} */ }
          </div>
        </div>
      </div>
    );
  }
}

export default Question;
