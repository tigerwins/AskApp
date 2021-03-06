import merge from 'lodash/merge';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const nullState = {
  errorType: "",
  errorList: []
};

const errorReducer = (state = nullState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ERRORS:
      const { errorType, errorList } = action.errors;
      return merge({}, nullState, {
        errorType,
        errorList
      });
    case CLEAR_ERRORS:
      return nullState;
    default:
      return state;
  }
};

export default errorReducer;
