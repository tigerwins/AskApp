import React from 'react';
import { Link } from 'react-router-dom';
// import Answer from '../answers/answer';

class Question extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAnswer: false,
    };
  }



  render() {
    const { question } = this.props;

    return (
      <div className="question">
        {/* question header for topic tag(s) */}
        <div className="">
          <Link to={`/questions/${question.id}`}>
            <span className="question-body">
              {question.body}
            </span>
          </Link>

        </div>

      </div>
    );
  }
}

export default Question;
