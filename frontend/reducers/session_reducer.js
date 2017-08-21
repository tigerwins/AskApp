import merge from 'lodash/merge';
// import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);

  switch(action.type) {
    default:
      return state;
  }
};

export default sessionReducer;
