import indexOf from 'lodash/indexOf';

function getReadableStories({ storyState, archivedState }) {
  return storyState.filter(
    story => indexOf(archivedState, story.objectID) === -1
  );
}

export { getReadableStories };
