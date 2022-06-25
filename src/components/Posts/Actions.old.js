import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getPosts,
  likePost,
  unlikePost,
} from '../../Redux/actions/postsActions';

const Actions = ({ id, likes, userConnected }) => {
  //dispatch is used to dispatch actions to the store
  //like
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  //if user like the post, set liked to true
  useEffect(() => {
    if (likes && likes.length > 0) {
      likes.map((like) => {
        if (like.user._id === userConnected._id) {
          setLiked(true);
        }
      });
    }
  }, [likes]);
  const handleLike = async () => {
    setLiked(!liked);
    dispatch(likePost(id));
    dispatch(getPosts());
  };

  const handleUnlike = () => {
    setLiked(!liked);
    dispatch(unlikePost(id));
  };

  //comment
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  return (
    <>
      <div className={likes && likes.length > 0 ? 'liked-by' : ''}>
        {likes &&
          likes.length > 0 &&
          likes.map((like, index) => (
            <span key={index}>
              <img src={like.user.avatar.url} alt="" />
            </span>
          ))}
        {likes && likes.length > 0 ? (
          <p>
            liked by <b>{likes && likes.length > 0 && likes[0].user.name}</b>
            {likes && likes.length > 1 ? (
              <b> and {likes && likes.length - 1} others</b>
            ) : (
              ''
            )}
          </p>
        ) : null}
      </div>

      <div className="actions">
        <span>
          {liked ? (
            <i
              className="fas fa-heart text-red-600 cursor-pointer"
              onClick={handleUnlike}
            ></i>
          ) : (
            <i className="uil uil-heart-alt pointer" onClick={handleLike}></i>
          )}
        </span>

        <span>
          {' '}
          <i className="uil uil-comment-dots"></i>
        </span>
        <span>
          {' '}
          <i className="uil uil-share"></i>
        </span>
      </div>
    </>
  );
};

export default Actions;
