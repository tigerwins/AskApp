import * as QuestionAPIUtil from '../util/question_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const RECEIVE_NEW_QUESTION = "RECEIVE_NEW_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveQuestions = payload => ({
  type: RECEIVE_QUESTIONS,
  payload,
});

export const receiveQuestion = payload => ({
  type: RECEIVE_QUESTION,
  payload,
});

export const receiveNewQuestion = payload => ({
  type: RECEIVE_NEW_QUESTION,
  payload,
});

export const removeQuestion = payload => ({
  type: REMOVE_QUESTION,
  payload,
});

export const fetchQuestions = () => dispatch => {
  return QuestionAPIUtil.fetchQuestions().then(
    questions => dispatch(receiveQuestions(questions))
  );
};

export const fetchQuestion = id => dispatch => {
  return QuestionAPIUtil.fetchQuestion(id).then(
    question => dispatch(receiveQuestion(question))
  );
};

export const createQuestion = question => dispatch => {
  return QuestionAPIUtil.createQuestion(question).then(
    newQuestion => dispatch(receiveNewQuestion(newQuestion)),
    errors => dispatch(receiveErrors({
      errorType: "createQuestion",
      errorList: errors.responseJSON,
    }))
  );
};

export const updateQuestion = question => dispatch => {
  return QuestionAPIUtil.updateQuestion(question).then(
    updatedQuestion => dispatch(receiveQuestion(updatedQuestion)),
    errors => dispatch(receiveErrors({
      errorType: "updateQuestion",
      errorList: errors.responseJSON,
    }))
  );
};

export const deleteQuestion = question => dispatch => {
  return QuestionAPIUtil.destroyQuestion(question).then(
    oldQuestion => dispatch(removeQuestion(oldQuestion))
  );
};
