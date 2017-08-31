import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import {
  RECEIVE_UPVOTE,
  REMOVE_UPVOTE,
} from '../actions/upvote_actions';

const nullUser = Object.freeze({
  currentUser: null,
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });
    case RECEIVE_UPVOTE:
      // const userId = action.payload.user_id;
      const answerId = action.payload.answer_id;
      nextState.currentUser.upvotedAnswers.push(answerId);
      return nextState;
    case REMOVE_UPVOTE:
      // const oldUserId = action.payload.user_id;
      const oldAnswerId = action.payload.answer_id;
      const upvoteIdx = nextState.currentUser.upvotedAnswers.indexOf(oldAnswerId);
      nextState.currentUser.upvotedAnswers.splice(upvoteIdx, 1);
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;
