import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, { currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
