import React from 'react';
import { connect } from 'react-router-dom';
import {
  createQuestionTopic,
  deleteQuestionTopic
} from '../../actions/topic_actions';

class DetailTopicList extends React.Component {
  constructor(props) {
    super(props);

    this.createTag = this.createTag.bind(this);
    this.destroyTag = this.destroyTag.bind(this);
  }

  createTag(e) {

  }

  destroyTag(e) {
    // this.props.
  }

  render() {
    const topicList = Object.keys(this.props.topics).map(id => {
      return (
        <li className="topic" key={`topic-${id}`}>
          <span>
            { this.props.topics[id].name }
          </span>

          <span className="close-x" onClick={this.destroyTag}>
            <svg className="close-x-svg" onClick={this.destroyTag} viewBox="0 0 20 20" height="20" width="20">
              <path className="close-x" d="M 5,5 L 15,15 M 15,5 L 5,15" />
            </svg>
          </span>
        </li>
      );
    });

    return (
      <ul className="topic-list">
        { topicList }
        <li className="topic new-topic">Add New Topic</li>
      </ul>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTag: (questionTopic) => createQuestionTopic(questionTopic),
    deleteTag: (questionTopic) => deleteQuestionTopic(questionTopic),
  };
};

export default DetailTopicList;
