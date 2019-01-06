import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import archiveReducer from './archiveReducer';

const rootReducer = combineReducers({
  storyState: storyReducer,
  archivedState: archiveReducer
});

export default rootReducer;
