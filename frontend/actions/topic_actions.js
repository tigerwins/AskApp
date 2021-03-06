import * as TopicAPIUtil from '../util/topic_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_QUESTION_TOPIC = "RECEIVE_QUESTION_TOPIC";
export const REMOVE_QUESTION_TOPIC = "REMOVE_QUESTION_TOPIC";
export const RECEIVE_FEED_TOPICS = "RECEIVE_FEED_TOPICS";

export const receiveQuestionTopic = payload => ({
  type: RECEIVE_QUESTION_TOPIC,
  payload,
});

export const removeQuestionTopic = payload => ({
  type: REMOVE_QUESTION_TOPIC,
  payload,
});

export const receiveFeedTopics = payload => ({
  type: RECEIVE_FEED_TOPICS,
  payload,
});

export const fetchFeedTopics = () => dispatch => {
  return TopicAPIUtil.fetchTopics().then(
    feedTopics => dispatch(receiveFeedTopics(feedTopics))
  );
};

export const createQuestionTopic = questionTopic => dispatch => {
  return TopicAPIUtil.createQuestionTopic(questionTopic).then(
    newQuestionTopic => dispatch(receiveQuestionTopic(newQuestionTopic)),
    errors => dispatch(receiveErrors({
      errorType: "createQuestionTopic",
      errorList: errors.responseJSON,
    }))
  );
};

export const deleteQuestionTopic = (questionTopic) => dispatch => {
  return TopicAPIUtil.destroyQuestionTopic(questionTopic).then(
    oldQuestionTopic => dispatch(removeQuestionTopic(oldQuestionTopic))
  );
};
