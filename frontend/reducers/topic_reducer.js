import merge from 'lodash/merge';
import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
} from '../actions/question_actions';
import {
  RECEIVE_QUESTION_TOPIC,
  REMOVE_QUESTION_TOPIC,
} from '../actions/topic_actions';

const topicReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      Object.keys(action.payload.topics).forEach(id => {
        nextState[id] = action.payload.topics[id];
      });
      return nextState;
    case RECEIVE_QUESTION:
      Object.keys(action.payload.topics).forEach(id => {
        nextState[id] = action.payload.topics[id];
      });

      return nextState;
    case RECEIVE_QUESTION_TOPIC:
      nextState = merge({}, state);
      const questionTopic = action.payload.question_topic;
      const topicId = questionTopic.topic_id;
      const questionIds = nextState[topicId].questionIds;

      if (questionIds.indexOf(questionTopic.question_id) === -1) {
        nextState[topicId] = action.payload.topic;
      }

      nextState[topicId].questionIds.push(questionTopic.question_id);
      return nextState;
    case REMOVE_QUESTION_TOPIC:
      nextState = merge({}, state);
      const oldQuestionTopic = action.payload.questionTopic;
      const questionIdx = nextState[oldQuestionTopic.topic_id].questionIds.indexOf(
        oldQuestionTopic.question_id);
      nextState[oldQuestionTopic.topic_id].questionIds.splice(
        questionIdx, 1);
      return nextState;
    default:
      return state;
  }
};

export default topicReducer;
