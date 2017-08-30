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

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      Object.keys(action.payload.questions).forEach(id => {
        nextState[id] = action.payload.questions[id];
      });
      return merge({}, state, nextState);
    case RECEIVE_QUESTION:
      nextState[action.payload.question.id] = action.payload.question;
      return nextState;
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
      const answerIdx = nextState[oldAnswer.question_id].answerIds.indexOf(oldAnswer.id);
      nextState[oldAnswer.question_id].answerIds.splice(answerIdx, 1);
      return nextState;
    default:
      return state;
  }
};

export default questionReducer;
