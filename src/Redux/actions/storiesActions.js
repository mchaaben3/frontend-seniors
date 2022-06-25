import axios from 'axios';
import {
  GET_STORIES_FAIL,
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
} from '../constants/storiesConstants';

export const getStories = () => async (dispatch) => {
  try {
    dispatch({ type: GET_STORIES_REQUEST });
    const { data } = await axios.get('/api/v1/stories', {
      credentials: 'include',
    });

    dispatch({
      type: GET_STORIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STORIES_FAIL,
      payload: error.response.data.message,
    });
  }
};
