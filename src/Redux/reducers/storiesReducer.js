import {
  GET_STORIES_FAIL,
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
} from '../constants/storiesConstants';

//get stories reducer
export const getStoriesReducer = (state = { stories: [] }, action) => {
  switch (action.type) {
    case GET_STORIES_REQUEST:
      return {
        loading: true,
        stories: [],
      };
    case GET_STORIES_SUCCESS:
      return {
        loading: false,
        stories: action.payload.stories,
      };
    case GET_STORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
