import axios from 'axios';
import {
  ACCEPT_FRIEND_REQUESTS_FAIL,
  ACCEPT_FRIEND_REQUESTS_REQUEST,
  ACCEPT_FRIEND_REQUESTS_SUCCESS,
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
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SEND_FRIEND_REQUESTS_FAIL,
  SEND_FRIEND_REQUESTS_REQUEST,
  SEND_FRIEND_REQUESTS_SUCCESS,
} from '../constants/usersConstants';

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ email, password });
    const res = await axios.post('/api/v1/login', body, config);
    const user = res.data;
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};
// Register user
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post('/api/v1/register', userData, config);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
// Load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    const { data } = await axios.get('/api/v1/me', {
      credentials: 'include',
    });

    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
//load user by id
export const loadUserById = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_BY_ID_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/users/${id}`);

    dispatch({
      type: LOAD_USER_BY_ID_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_BY_ID_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  try {
    await axios.get('/api/v1/logout', null, {
      credentials: 'include',
    });

    dispatch({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'LOGOUT_FAIL', payload: error.response.data.message });
  }
};

export const getFriendRequests = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FRIEND_REQUESTS_REQUEST });
    const { data } = await axios.get('/api/v1/users/friendRequest', {
      credentials: 'include',
    });

    dispatch({
      type: GET_FRIEND_REQUESTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_FRIEND_REQUESTS_FAIL,
      payload: error.message,
    });
  }
};
// Accept friend request
export const acceptFriendRequest = (id) => async (dispatch) => {
  try {
    dispatch({ type: ACCEPT_FRIEND_REQUESTS_REQUEST });
    const { data } = await axios.put(
      `/api/v1/users/acceptFriendRequest/${id}`,
      {
        credentials: 'include',
      }
    );

    dispatch({
      type: ACCEPT_FRIEND_REQUESTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: ACCEPT_FRIEND_REQUESTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//send friend request
export const sendFriendRequest = (id) => async (dispatch) => {
  try {
    dispatch({ type: SEND_FRIEND_REQUESTS_REQUEST });
    const { data } = await axios.post(`/api/v1/users/friendRequest/${id}`, {
      credentials: 'include',
    });

    dispatch({
      type: SEND_FRIEND_REQUESTS_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: SEND_FRIEND_REQUESTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//get friend request by id
export const getFriendRequestById = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_FRIEND_REQUESTS_BY_ID_REQUEST });
    const { data } = await axios.get(`/api/v1/users/friendRequest/${id}`, {
      credentials: 'include',
    });

    dispatch({
      type: GET_FRIEND_REQUESTS_BY_ID_SUCCESS,
      payload: data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_FRIEND_REQUESTS_BY_ID_FAIL,
      payload: error.response.data.message,
    });
  }
};
