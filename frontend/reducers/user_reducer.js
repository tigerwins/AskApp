import merge from 'lodash/merge';
import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
} from '../actions/question_actions';
import {
  RECEIVE_ANSWER,
  REMOVE_ANSWER,
} from '../actions/answer_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

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
      nextState = merge({}, state);
      nextState[action.payload.author.id] = action.payload.author;
      nextState[action.payload.answer.author_id].answerIds.push(action.payload.answer.id);
      // const newAnswer = {
      //   [action.payload.author.id]: action.payload.author
      // };
      return nextState;
    case RECEIVE_COMMENT:
      nextState = merge({}, state);
      nextState[action.payload.comment.user_id].commentIds.push(action.payload.comment.id);
      return nextState;

    default:
      return state;
  }
};

export default userReducer;
