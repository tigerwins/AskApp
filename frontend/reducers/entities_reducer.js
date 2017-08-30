import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import questionReducer from './question_reducer';
import answerReducer from './answer_reducer';
import commentReducer from './comment_reducer';
import topicReducer from './topic_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  questions: questionReducer,
  answers: answerReducer,
  comments: commentReducer,
  topics: topicReducer,
});

export default entitiesReducer;
