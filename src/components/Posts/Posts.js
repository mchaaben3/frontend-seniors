import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../Redux/actions/postsActions';
import Loader from '../layouts/Loader';
import CreatePost from './CreatePost';
import Feed from './Feed';

const Posts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const { loading, error, posts } = useSelector((state) => state.posts);

  return (
    <div className="middle">
      <CreatePost />
      <div className="feeds">
        {loading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : (
          posts &&
          posts.map((post) => (
            <Feed
              key={post._id}
              id={post._id}
              user={post.user}
              createdAt={post.createdAt}
              content={post.content}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Posts;
