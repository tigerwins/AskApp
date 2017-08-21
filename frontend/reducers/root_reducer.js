import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
// import EntitiesReducer from './entities_reducer';
// import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  // entities: entitiesReducer,
  // ui: uiReducer,
});

export default rootReducer;
