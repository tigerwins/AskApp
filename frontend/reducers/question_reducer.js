import merge from 'lodash/merge';
import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  RECEIVE_NEW_QUESTION,
} from '../actions/question_actions';
import {
  RECEIVE_ANSWER,
  REMOVE_ANSWER,
} from '../actions/answer_actions';
import {
  RECEIVE_QUESTION_TOPIC,
  REMOVE_QUESTION_TOPIC,
} from '../actions/topic_actions';

const questionReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};
  let questionId, topicId;

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.payload.questions;
    case RECEIVE_QUESTION:
      return { [action.payload.question.id]: action.payload.question };
    case RECEIVE_NEW_QUESTION:
      const newQuestion = {
        [action.payload.question.id]: action.payload.question
      };
      return merge({}, state, newQuestion);
    case RECEIVE_ANSWER:
      nextState = merge({}, state);
      const { answer } = action.payload;
      const answerIds = nextState[answer.question_id].answerIds;
      if (answerIds.indexOf(answer.id) === -1) {
        nextState[answer.question_id].answerIds.push(answer.id);
      }

      return nextState;
    case REMOVE_ANSWER:
      nextState = merge({}, state);
      const oldAnswer = action.payload.answer;
      questionId = oldAnswer.question_id;
      const answerIdx = nextState[questionId].answerIds.indexOf(oldAnswer.id);
      nextState[questionId].answerIds.splice(answerIdx, 1);
      return nextState;
    case RECEIVE_QUESTION_TOPIC:
      nextState = merge({}, state);
      const questionTopic = action.payload.question_topic;
      questionId = questionTopic.question_id;
      const topicIds = nextState[questionId].topicIds;

      if (topicIds.indexOf(questionTopic.topic_id) === -1) {
        nextState[questionId].topicIds.push(questionTopic.topic_id);
      }

      return nextState;
    case REMOVE_QUESTION_TOPIC:
      nextState = merge({}, state);
      const oldQuestionTopic = action.payload.question_topic;
      questionId = oldQuestionTopic.question_id;
      topicId = oldQuestionTopic.topic_id;
      const topicIdx = nextState[questionId].topicIds.indexOf(topicId);

      nextState[questionId].topicIds.splice(topicIdx, 1);
      return nextState;
    default:
      return state;
  }
};

export default questionReducer;
