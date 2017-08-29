import * as QuestionAPIUtil from '../util/question_api_util';

export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const SEARCH_QUESTIONS = "SEARCH_QUESTIONS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const toggleModal = (modal) => ({
  type: TOGGLE_MODAL,
  modal,
});

export const receiveSearchResults = payload => ({
  type: RECEIVE_SEARCH_RESULTS,
  payload,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

export const searchQuestions = (query) => dispatch => {
  return QuestionAPIUtil.searchQuestions(query).then(
    searchResults => dispatch(receiveSearchResults(searchResults))
  );
};
