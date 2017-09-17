import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
  createQuestionTopic,
  deleteQuestionTopic
} from '../../actions/topic_actions';
import { clearErrors } from '../../actions/session_actions';
import AutosizeInput from 'react-input-autosize';

class DetailTopicList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTag: false,
      tagText: "",
    };

    this.openTag = this.openTag.bind(this);
    this.closeTag = this.closeTag.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.createTag = this.createTag.bind(this);
    this.destroyTag = this.destroyTag.bind(this);
    this.renderTopics = this.renderTopics.bind(this);
  }

  openTag(e) {
    this.setState({ newTag: true });
  }

  closeTag(e) {
    this.setState({ newTag: false, tagText: "" });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.createTag();
    }
  }

  handleChange(e) {
    if (e.currentTarget.value.length < 128) {
      this.setState({ tagText: e.currentTarget.value });
    }
  }

  createTag() {
    const questionTopic = {
      question_id: this.props.match.params.id,
      name: this.state.tagText,
    };

    this.props.createTag(questionTopic);
    this.setState({ newTag: false, tagText: "" });
  }

  destroyTag(e) {
    const topicId = e.currentTarget.parentElement.getAttribute("data-topic-id");
    const questionId = this.props.match.params.id;
    const questionTopic = { questionId, topicId };

    this.props.deleteTag(questionTopic);
  }

  renderTopics() {
    const topicList = Object.keys(this.props.topics).map(id => {
      return (
        <li className="topic" key={`topic-${id}`} data-topic-id={id}>
          <Link to={`/topics/${id}`}>
            {this.props.topics[id].name}
          </Link>
          <div onClick={this.destroyTag}>
            <span className="close-x topic-x">
              <svg className="close-x-svg" viewBox="0 0 10 10" height="10" width="10">
                <path className="close-x" d="M 2.5,2.5 L 7.5,7.5 M 7.5,2.5 L 2.5,7.5" />
              </svg>
            </span>
          </div>
        </li>
      );
    });

    return topicList;
  }

  render() {
    return (
      <ul className="topic-list">
        {this.renderTopics()}

        { !this.state.newTag ? (
          <li className="topic">
            <span className="new-topic" onClick={this.openTag}>
              <svg className="pen" width="15" height="15" stroke="#808393">
                <image width="15" height="15" xlinkHref={window.images.pen_svg} />
              </svg>
              Add a Topic
            </span>
          </li>
        ) : (
          <li className="new-topic-box">
            <AutosizeInput
              className="new-topic-editor text-box"
              name="new-topic-input"
              autoFocus="True"
              value={this.state.tagText}
              onKeyDown={this.handleKeyDown}
              onChange={this.handleChange}
              onBlur={this.closeTag} />
          </li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const questionId = ownProps.match.params.id;
  const topicIds = state.entities.questions[questionId].topicIds;
  let topics = {};

  Object.keys(state.entities.topics).forEach(id => {
    if (topicIds.includes(Number(id))) {
      topics[id] = state.entities.topics[id];
    }
    return;
  });

  return {
    topics,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createTag: (questionTopic) => {
      dispatch(clearErrors());
      dispatch(createQuestionTopic(questionTopic));
    },
    deleteTag: (questionTopic) => {
      dispatch(clearErrors());
      dispatch(deleteQuestionTopic(questionTopic));
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailTopicList));
