import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLikes,
  getPosts,
  likePost,
  unlikePost,
} from '../../Redux/actions/postsActions';

const Actions = ({ id, userConnected }) => {
  const dispatch = useDispatch(); //dispatch is used to dispatch actions to the store
  //like
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const allLikesOfPost = useSelector((state) => state.likes);
  //if user like the post, set liked to true
  useEffect(() => {
    dispatch(getLikes(id));
    console.log(allLikesOfPost);
  }, []);
  const handleLike = async () => {
    setLiked(!liked);
    dispatch(likePost(id));
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
      <div className="liked-by">
        <span>
          <img src={userConnected.avatar.url} alt="" />
        </span>
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
