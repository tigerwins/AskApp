import {
  RECEIVE_QUESTIONS,
  RECEIVE_QUESTION,
  RECEIVE_NEW_QUESTION,
  START_LOADING_QUESTIONS,
  START_LOADING_QUESTION
} from '../actions/question_actions';


const initialState = {
  indexLoading: false,
  detailLoading: false
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    default:
      return state;
  }
};
