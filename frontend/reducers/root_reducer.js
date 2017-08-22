import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
// import EntitiesReducer from './entities_reducer';
// import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  // entities: entitiesReducer,
  // ui: uiReducer,
});

export default rootReducer;
