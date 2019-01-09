import { STORIES_FETCH } from '../constants/actionTypes';

const INITIAL_STATE = {
  entities: {},
  ids: []
};

function storyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case STORIES_FETCH: {
      return applyFetchStories(state, action);
    }
    default:
      return state;
  }
}

function applyFetchStories(state, action) {
  const ids = action.normalizedStories.result;
  const entities = action.normalizedStories.entities;
  return { ...state, entities, ids };
}

export default storyReducer;
