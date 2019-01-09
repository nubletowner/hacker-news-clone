import { STORIES_ADD, STORIES_FETCH } from '../constants/actionTypes';
import axios from 'axios';
import { normalize } from 'normalizr';
import { storySchema } from '../schemas';

function fetchStories(normalizedStories) {
  return {
    type: STORIES_FETCH,
    normalizedStories
  };
}

function doFetchAllStories() {
  return function(dispatch) {
    axios.get('http://hn.algolia.com/api/v1/search?query=').then(response => {
      return dispatch(
        fetchStories(normalize(response.data.hits, [storySchema]))
      );
    });
  };
}

export { doFetchAllStories };
