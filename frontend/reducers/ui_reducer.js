import merge from 'lodash/merge';
import { TOGGLE_MODAL } from '../actions/ui_actions';

const initialState = {
  modal: {
    display: false,
    component: null
  }
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
    default:
      return state;
  }
};

export default uiReducer;
