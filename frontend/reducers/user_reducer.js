import merge from 'lodash/merge';
import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
} from '../actions/question_actions';
import {
  RECEIVE_ANSWER,
  REMOVE_ANSWER,
} from '../actions/answer_actions';
import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comment_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.payload.users;
    case RECEIVE_QUESTION:
      return action.payload.users;
    case RECEIVE_ANSWER:
      const { author, answer } = action.payload;
      merge(nextState, { [author.id]: author});
      nextState[author.id].answerIds.push(answer.id);
      return nextState;
    case RECEIVE_COMMENT:
      const newComment = action.payload.comment;
      nextState[newComment.user_id].commentIds.push(newComment.id);
      return nextState;
    case REMOVE_COMMENT:
      const { comment } = action.payload;
      const commentIdx = nextState[comment.user_id].commentIds.indexOf(comment.id);
      nextState[comment.user_id].commentIds.splice(commentIdx, 1);
      return nextState;
    default:
      return state;
  }
};

export default userReducer;
