import * as AnswerAPIUtil from '../util/answer_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const REMOVE_ANSWER = "REMOVE_ANSWER";

export const receiveAnswer = payload => ({
  type: RECEIVE_ANSWER,
  payload,
});

export const removeAnswer = payload => ({
  type: REMOVE_ANSWER,
  payload,
});

export const createAnswer = (answer) => dispatch => {
  return AnswerAPIUtil.createAnswer(answer).then(
    newAnswer => dispatch(receiveAnswer(newAnswer)),
    errors => dispatch(receiveErrors({
      errorType: "createAnswer",
      errorList: errors.responseJSON,
    }))
  );
};

export const updateAnswer = answer => dispatch => {
  return AnswerAPIUtil.updateAnswer(answer).then(
    updatedAnswer => dispatch(receiveAnswer(updatedAnswer)),
    errors => dispatch(receiveErrors({
      errorType: "updateAnswer",
      errorList: errors.responseJSON,
    }))
  );
};

export const deleteAnswer = answer => dispatch => {
  return AnswerAPIUtil.destroyAnswer(answer).then(
    oldAnswer => dispatch(removeAnswer(oldAnswer))
  );
};
