import indexOf from 'lodash/indexOf';

function getReadableStories({ storyState, archivedState }) {
  debugger;
  return storyState.ids.filter(id => indexOf(archivedState, id) === -1);
}

function getStoryAsEntity(state, id) {
  return state.storyState.entities.stories[id];
}

export { getReadableStories, getStoryAsEntity };
