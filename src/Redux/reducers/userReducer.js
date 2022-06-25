import {
  ACCEPT_FRIEND_REQUESTS_FAIL,
  ACCEPT_FRIEND_REQUESTS_REQUEST,
  ACCEPT_FRIEND_REQUESTS_SUCCESS,
  CLEAR_ERRORS,
  GET_FRIEND_REQUESTS_BY_ID_FAIL,
  GET_FRIEND_REQUESTS_BY_ID_REQUEST,
  GET_FRIEND_REQUESTS_BY_ID_SUCCESS,
  GET_FRIEND_REQUESTS_FAIL,
  GET_FRIEND_REQUESTS_REQUEST,
  GET_FRIEND_REQUESTS_SUCCESS,
  LOAD_USER_BY_ID_FAIL,
  LOAD_USER_BY_ID_REQUEST,
  LOAD_USER_BY_ID_SUCCESS,
  LOAD_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SEND_FRIEND_REQUESTS_FAIL,
  SEND_FRIEND_REQUESTS_REQUEST,
  SEND_FRIEND_REQUESTS_SUCCESS,
} from '../constants/usersConstants';

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };

    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
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

//friend request reducer
export const friendRequestReducer = (
  state = { friendRequests: [] },
  action
) => {
  switch (action.type) {
    case GET_FRIEND_REQUESTS_REQUEST:
    case ACCEPT_FRIEND_REQUESTS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_FRIEND_REQUESTS_SUCCESS:
    case ACCEPT_FRIEND_REQUESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        friendRequests: action.payload,
      };

    case GET_FRIEND_REQUESTS_FAIL:
    case ACCEPT_FRIEND_REQUESTS_FAIL:
      return {
        ...state,
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
//send friend request reducer
export const sendFriendRequestReducer = (
  state = { friendRequestSent: false },
  action
) => {
  switch (action.type) {
    case SEND_FRIEND_REQUESTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEND_FRIEND_REQUESTS_SUCCESS:
      return {
        ...state,
        loading: false,
        friendRequestSent: true,
      };
    case SEND_FRIEND_REQUESTS_FAIL:
      return {
        ...state,
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

//load user by id reducer
export const loadUserByIdReducer = (state = { userByID: {} }, action) => {
  switch (action.type) {
    case LOAD_USER_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOAD_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        userByID: action.payload,
      };

    case LOAD_USER_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
  }
  return state;
};

//get friend request by id
export const getFriendRequestByIdReducer = (
  state = { friendRequestById: {} },
  action
) => {
  switch (action.type) {
    case GET_FRIEND_REQUESTS_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_FRIEND_REQUESTS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        friendRequestById: action.payload,
      };

    case GET_FRIEND_REQUESTS_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
  }
  return state;
};
