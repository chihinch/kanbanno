import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import boardsErrorReducer from './board_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  boards: boardsErrorReducer
});

export default errorsReducer;