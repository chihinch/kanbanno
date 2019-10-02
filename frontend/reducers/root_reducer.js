import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer
});

export default rootReducer;