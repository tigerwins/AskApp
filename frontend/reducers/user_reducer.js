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
import {
  RECEIVE_UPVOTE,
  REMOVE_UPVOTE,
} from '../actions/upvote_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_QUESTIONS:
      // Object.keys(action.payload.users).forEach(id => {
      //   nextState[id] = action.payload.users[id];
      // });
      // return nextState;
      return action.payload.users;
    case RECEIVE_QUESTION:
      // Object.keys(action.payload.users).forEach(id => {
      //   nextState[id] = action.payload.users[id];
      // });
      // return nextState;
      return action.payload.users;
    case RECEIVE_ANSWER:
      // nextState = merge({}, state);
      const { author, answer } = action.payload;
      merge(nextState, { [author.id]: author});
      nextState[author.id].answerIds.push(answer.id);
      return nextState;
    case RECEIVE_COMMENT:
      // nextState = merge({}, state);
      const newComment = action.payload.comment;
      nextState[newComment.user_id].commentIds.push(newComment.id);
      return nextState;
    case REMOVE_COMMENT:
      // nextState = merge({}, state);
      const { comment } = action.payload;
      const commentIdx = nextState[comment.user_id].commentIds.indexOf(comment.id);
      nextState[comment.user_id].commentIds.splice(commentIdx, 1);
      return nextState;
    // case RECEIVE_UPVOTE:
    //   const userId = action.payload.user_id;
    //   const answerId = action.payload.answer_id;
    //   nextState[userId].upvotedAnswers.push(answerId);
    //   return nextState;
    // case REMOVE_UPVOTE:
    //   const oldUserId = action.payload.user_id;
    //   const oldAnswerId = action.payload.answer_id;
    //   const upvoteIdx = nextState[oldUserId].upvotedAnswers.indexOf(oldAnswerId);
    //   nextState[oldUserId].upvotedAnswers.splice(upvoteIdx, 1);
    //   return nextState;
    default:
      return state;
  }
};

export default userReducer;
