import * as UpvoteAPIUtil from '../util/upvote_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const REMOVE_UPVOTE = "REMOVE_UPVOTE";

export const receiveUpvote = payload => ({
  type: RECEIVE_UPVOTE,
  payload,
});

export const removeUpvote = payload => ({
  type: REMOVE_UPVOTE,
  payload,
});

export const createUpvote = upvote => dispatch => {
  return UpvoteAPIUtil.createUpvote(upvote).then(
    newUpvote => dispatch(receiveUpvote(newUpvote)),
    errors => dispatch(receiveErrors({
      errorType: "createUpvote",
      errorList: errors.responseJSON,
    }))
  );
};

export const deleteUpvote = upvote => dispatch => {
  return UpvoteAPIUtil.destroyUpvote(upvote).then(
    oldUpvote => dispatch(removeUpvote(oldUpvote))
  );
};
