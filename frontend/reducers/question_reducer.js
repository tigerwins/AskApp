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
      Object.keys(action.questions).forEach(id => {
        nextState[id] = action.questions[id];
      });
      return nextState;
    case RECEIVE_QUESTION:
      const newQuestion = { [action.question.id]: action.question };
      return merge({}, state, newQuestion);
    case REMOVE_QUESTION:
      nextState = merge({}, state);
      delete nextState[action.question.id];
      return nextState;
    default:
      return state;
  }
};

export default questionReducer;
