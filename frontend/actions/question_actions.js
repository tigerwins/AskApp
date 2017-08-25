import * as QuestionAPIUtil from '../util/question_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export const receiveQuestions = questions => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

export const receiveQuestion = question => ({
  type: RECEIVE_QUESTION,
  question,
});

export const removeQuestion = question => ({
  type: REMOVE_QUESTION,
  question,
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
    newQuestion => dispatch(receiveQuestion(newQuestion)),
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
