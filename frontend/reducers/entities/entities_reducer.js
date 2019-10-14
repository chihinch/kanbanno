import { combineReducers } from 'redux';

import boardsReducer from './boards_reducer';
import listsReducer from './lists_reducer';

const entitiesReducer = combineReducers({
  boards: boardsReducer,
  lists: listsReducer
});

export default entitiesReducer;