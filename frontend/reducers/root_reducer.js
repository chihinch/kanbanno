import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

// TODO: add usersReducer

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;