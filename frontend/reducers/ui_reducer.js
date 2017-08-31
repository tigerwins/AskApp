import merge from 'lodash/merge';
import {
  TOGGLE_MODAL,
  RECEIVE_SEARCH_RESULTS,
  CLEAR_SEARCH,
} from '../actions/ui_actions';
// import { RECEIVE_FEED_TOPICS } from '../actions/topic_actions';

const initialState = {
  modal: {
    display: false,
    component: null
  },
  search: [],
  notifications: "",
  feeds: []
};

const uiReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case TOGGLE_MODAL:
      let newState;
      if (state.modal.display) {
        newState = merge({}, state, { modal: {
          display: false,
          component: null
        }});
      } else {
        newState = merge({}, state, { modal: {
          display: true,
          component: action.modal
        } });
      }

      return newState;
    case RECEIVE_SEARCH_RESULTS:
      const searchResults = { search: action.payload };
      return merge({}, state, searchResults);
    case CLEAR_SEARCH:
      const clearSearch = { search: [] };
      return merge({}, state, clearSearch);
    // case RECEIVE_FEED_TOPICS:
    //   const feedTopics = { feeds: action.payload.topics };
    //   return merge({}, state, feedTopics);
    default:
      return state;
  }
};

export default uiReducer;
