import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  authReducer,
  friendRequestReducer,
  getFriendRequestByIdReducer,
  loadUserByIdReducer,
  sendFriendRequestReducer,
} from './reducers/userReducer';
import {
  getPostReducer,
  postsByUserIdReducer,
  postsReducer,
} from './reducers/postsReducer';
import { getStoriesReducer } from './reducers/storiesReducer';

const reducer = combineReducers({
  user: authReducer,
  posts: postsReducer,
  post: getPostReducer,
  friendRequest: friendRequestReducer,
  friendRequestSent: sendFriendRequestReducer,
  loadUserByIdReducer: loadUserByIdReducer,
  postsByUserIdReducer: postsByUserIdReducer,
  getFriendRequestByIdReducer: getFriendRequestByIdReducer,
  stories: getStoriesReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
