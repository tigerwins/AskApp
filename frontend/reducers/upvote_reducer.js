import merge from 'lodash/merge';
import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
} from '../actions/question_actions';
import {
  RECEIVE_ANSWER,
  REMOVE_ANSWER
} from '../actions/answer_actions';
import {
  // RECEIVE_UPVOTES,
  RECEIVE_UPVOTE,
  REMOVE_UPVOTE,
} from '../actions/upvote_actions';

const upvoteReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type) {
    // case RECEIVE_QUESTIONS:
    //   Object.keys(action.payload.upvotes).forEach(id => {
    //
    //   });
    default:
      return state;
  }

};

export default upvoteReducer;
