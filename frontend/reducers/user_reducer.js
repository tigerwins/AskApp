import merge from 'lodash/merge';
import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
} from '../actions/question_actions';
import { RECEIVE_ANSWER } from '../actions/answer_actions';
// import { RECEIVE_COMMENT } from '../actions/comment_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      Object.keys(action.payload.users).forEach(id => {
        nextState[id] = action.payload.users[id];
      });
      return nextState;
    case RECEIVE_QUESTION:
      Object.keys(action.payload.users).forEach(id => {
        nextState[id] = action.payload.users[id];
      });
      return nextState;
    case RECEIVE_ANSWER:
      const newAnswer = {
        [action.payload.user.id]: action.payload.user
      };
      return merge({}, state, newAnswer);
    default:
      return state;
  }
};

export default userReducer;
