import merge from 'lodash/merge';
import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
} from '../actions/question_actions';
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';

const commentReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      Object.keys(action.payload.comments).forEach(id => {
        nextState[id] = action.payload.comments[id];
      });
      return nextState;
    case RECEIVE_QUESTION:
      Object.keys(action.payload.comments).forEach(id => {
        nextState[id] = action.payload.comments[id];
      });
      return nextState;
    case RECEIVE_COMMENT:
      const newComment = { [action.payload.comment.id]: action.payload.comment };
      return merge({}, state, newComment);
    case REMOVE_COMMENT:
      nextState = merge({}, state);
      delete nextState[action.payload.comment.id];
      return nextState;
    default:
      return state;
  }
};

export default commentReducer;
