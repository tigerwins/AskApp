import merge from 'lodash/merge';
import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  REMOVE_QUESTION
} from '../actions/question_actions';

const questionReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      nextState = {};
      Object.keys(action.payload.questions).forEach(id => {
        nextState[id] = action.payload.questions[id];
      });
      return nextState;
    case RECEIVE_QUESTION:
      const newQuestion = {
        [action.payload.question.id]: action.payload.question
      };
      return merge({}, state, newQuestion);
    case REMOVE_QUESTION:
      nextState = merge({}, state);
      delete nextState[action.payload.question.id];
      return nextState;
    default:
      return state;
  }
};

export default questionReducer;
