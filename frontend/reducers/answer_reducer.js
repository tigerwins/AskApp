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
import { RECEIVE_COMMENT } from '../actions/comment_actions';

const answerReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      Object.keys(action.payload.answers).forEach(id => {
        nextState[id] = action.payload.answers[id];
      });
      return nextState;
    case RECEIVE_QUESTION:
      Object.keys(action.payload.answers).forEach(id => {
        nextState[id] = action.payload.answers[id];
      });
      return nextState;
    case RECEIVE_NEW_QUESTION:
      Object.keys(action.payload.answers).forEach(id => {
        nextState[id] = action.payload.answers[id];
      });
      return merge({}, state, nextState);
    case RECEIVE_ANSWER:
      const newAnswer = {
        [action.payload.answer.id]: action.payload.answer
      };
      return merge({}, state, newAnswer);
    case REMOVE_ANSWER:
      nextState = merge({}, state);
      delete nextState[action.payload.answer.id];
      return nextState;
    case RECEIVE_COMMENT:
      nextState = merge({}, state);
      nextState[action.payload.comment.answer_id].commentIds.push(action.payload.comment.id);
      return nextState;
    default:
      return state;
  }
};

export default answerReducer;
