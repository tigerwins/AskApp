import React from 'react';
import Feeds from './feeds';
import TopicQuestionIndex from './topic_question_index';

class TopicShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestQuestions(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.props.requestQuestions(nextProps.match.params.id);
    }
  }

  render() {
    return (
      <div className="topic-show-container content-wrapper">
        <Feeds />
        <div className="question-index-container">
          <div className="topic-show-header">
            { this.props.topic &&
              <h2>{ this.props.topic.name }</h2>
            }
          </div>
          <TopicQuestionIndex />
        </div>
      </div>
    );
  }
}

export default TopicShow;
