import axios from 'axios';
import {
  ALL_POSTS_FAIL,
  ALL_POSTS_REQUEST,
  ALL_POSTS_SUCCESS,
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  LIKE_POST_FAIL,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from '../constants/postsConstants';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_POSTS_REQUEST });

    const { data } = await axios.get('/api/v1/posts/all');

    dispatch({
      type: ALL_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_POSTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//create post
export const createPost =
  ({ content }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_POST_REQUEST });

      const { data } = await axios.post('/api/v1/post/create', {
        content: content,
      });

      dispatch({
        type: CREATE_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_POST_FAIL,
        payload: error.response.data.message,
      });
    }
  };

//get post by id
export const getPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_POST_REQUEST });

    const { data } = await axios.get(`/api/v1/post/${id}`);

    dispatch({
      type: GET_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};

//like post
export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({ type: LIKE_POST_REQUEST });

    const { data } = await axios.put(`/api/v1/post/like/${id}`);

    dispatch({
      type: LIKE_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIKE_POST_FAIL,
      payload: error.response.data.message,
    });
  }
};
