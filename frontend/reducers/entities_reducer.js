import { combineReducers } from 'redux';

import boardsReducer from './boards_reducer';

const entitiesReducer = combineReducers({
  boards: boardsReducer
});

export default entitiesReducer;