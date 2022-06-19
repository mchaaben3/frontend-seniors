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
import { CLEAR_ERRORS } from '../constants/usersConstants';

export const postsReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case ALL_POSTS_REQUEST:
    case CREATE_POST_REQUEST:
      return {
        loading: true,
        posts: [],
      };

    case ALL_POSTS_SUCCESS:
    case CREATE_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload.posts,
      };

    case ALL_POSTS_FAIL:
    case CREATE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

//get post by id reducer
export const getPostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
    case LIKE_POST_REQUEST:
      return {
        loading: true,
        post: {},
      };

    case GET_POST_SUCCESS:
    case LIKE_POST_SUCCESS:
      return {
        loading: false,
        post: action.payload.post,
      };

    case GET_POST_FAIL:
    case LIKE_POST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
