import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorReducer from './error_reducer';
import entitiesReducer from './entities_reducer';
// import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorReducer,
  // ui: uiReducer,
});

export default rootReducer;
