import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reducers/userReducer';
import { getPostReducer, postsReducer } from './reducers/postsReducer';

const reducer = combineReducers({
  user: authReducer,
  posts: postsReducer,
  post: getPostReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
