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
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
} from '../actions/comment_actions';
import {
  RECEIVE_UPVOTE,
  REMOVE_UPVOTE,
} from '../actions/upvote_actions';

const answerReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      return action.payload.answers;
    case RECEIVE_QUESTION:
      return action.payload.answers;
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
      const answerId = action.payload.comment.answer_id;
      const commentId = action.payload.comment.id;
      nextState[answerId].commentIds.push(commentId);
      return nextState;
    case REMOVE_COMMENT:
      nextState = merge({}, state);
      const { comment } = action.payload;
      const oldAnswerId = action.payload.comment.answer_id;
      const commentIdx = nextState[oldAnswerId].commentIds.indexOf(comment.id);
      nextState[oldAnswerId].commentIds.splice(commentIdx, 1);
      return nextState;
    case RECEIVE_UPVOTE:
      nextState = merge({}, state);
      const upvoteAnswerId = action.payload.answer_id;
      nextState[upvoteAnswerId].num_upvotes += 1;
      return nextState;
    case REMOVE_UPVOTE:
      nextState = merge({}, state);
      const oldUpvoteAnswerId = action.payload.answer_id;
      nextState[oldUpvoteAnswerId].num_upvotes -= 1;
      return nextState;
    default:
      return state;
  }
};

export default answerReducer;
