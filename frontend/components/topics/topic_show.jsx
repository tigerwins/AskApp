import React from 'react';
import Feeds from './feeds';
import TopicQuestionIndex from './topic_question_index';

class TopicShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestQuestions();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.requestQuestions();
    }
  }

  render() {
    return (
      <div className="topic-show-container content-wrapper">
        <Feeds />
        <div className="question-index-container">
          <TopicQuestionIndex />
        </div>
      </div>
    );
  }
}

export default TopicShow;
