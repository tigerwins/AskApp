import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class IndexTopicList extends React.Component {
  constructor(props) {
    super(props);

    this.renderLastTopic = this.renderLastTopic.bind(this);
  }

  renderLastTopic() {
    const { lastTopic } = this.props;

    if (lastTopic) {
      return (
        <div className="header-topic">
          <span className="bullet"> · </span>
          <div
            className="index-topic"
            key={`topic-${lastTopic.id}`}
            data-topic-id={lastTopic.id}
          >
            <Link to={`/topics/${lastTopic.id}`}>
              { lastTopic.name }
            </Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="index-topics">
        { this.props.answer ? (
          <div className="header-question-status">Answer</div>
        ) : (
          <div className="header-question-status">Question asked</div>
        )}
        { this.renderLastTopic() }
      </div>
    );
  }
}

const mapStateToProps = ({ entities }, ownProps) => {
  const questionId = ownProps.question.id;
  const topicIds = entities.questions[questionId].topicIds;
  const lastTopic = entities.topics[topicIds[topicIds.length - 1]];

  return {
    lastTopic,
  };
};

export default connect(mapStateToProps, null)(IndexTopicList);
