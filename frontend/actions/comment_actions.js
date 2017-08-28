import * as CommentAPIUtil from '../util/comment_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = payload => ({
  type: RECEIVE_COMMENTS,
  payload,
});

export const receiveComment = payload => ({
  type: RECEIVE_COMMENT,
  payload,
});

export const removeComment = payload => ({
  type: REMOVE_COMMENT,
  payload,
});

export const createComment = (comment) => dispatch => {
  return CommentAPIUtil.createComment(comment).then(
    newComment => dispatch(receiveComment(newComment)),
    errors => dispatch(receiveErrors({
      errorType: "createComment",
      errorList: errors.responseJSON,
    }))
  );
};

export const deleteComment = comment => dispatch => {
  return CommentAPIUtil.destroyComment(comment).then(
    oldComment => dispatch(removeComment(oldComment))
  );
};
