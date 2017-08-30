import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

export const receiveErrors = ({ errorType, errorList }) => {
  return {
    type: RECEIVE_ERRORS,
    errors: {
      errorType,
      errorList,
    },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user).then(
    newUser => dispatch(receiveCurrentUser(newUser)),
    errors => dispatch(receiveErrors({
      errorType: "signup",
      errorList: errors.responseJSON
    }))
  );
};

// accepts FB JS SDK response object for successful login
// uses acces token to query access for user name and email
// creates user model with name, email, and access token
// if email not available, make placeholder email

export const fbLogin = response => dispatch => {
  return SessionApiUtil.fbLoginOrSignup(response).then(
    newUser => dispatch(receiveCurrentUser(newUser)),
    errors => dispatch(receiveErrors({
      errorType: "signup",
      errorList: errors.responseJSON
    }))
  );
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveErrors({
      errorType: "login",
      errorList: errors.responseJSON
    }))
  );
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then(
    currentUser => dispatch(receiveCurrentUser(null))
  );
};
