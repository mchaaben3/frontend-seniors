import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../../Redux/actions/postsActions';
import { getTimeSince } from '../functions/TimeSince';

const Feed = ({ user, createdAt, content, id }) => {
  //like
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch(); //dispatch is used to dispatch actions to the store
  const handleLike = () => {
    setLiked(!liked);
    dispatch(likePost(id));
  };
  //comment
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };
  const timeSince = getTimeSince(createdAt);

  return (
    <div className="feed">
      <div className="head">
        <div className="user">
          <div className="profile-picture">
            <img src={user.avatar.url} />
          </div>
          <div className="info">
            <h3>{user.name}</h3>
            <small className="text-muted"> {timeSince} </small>
          </div>
        </div>

        <div className="edit">
          <i className="uil uil-ellipsis-h"></i>
        </div>
      </div>
      <div className="photo">
        <p> {content} </p>
      </div>
      <div className="actions">
        <div className="interaction-buttons">
          <span onClick={handleLike} className={`${liked ? 'heart' : ''}  `}>
            {/* fontawesome heart */}
            <i class="fas fa-thumbs-up fa-beat"></i>
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
        <div className="bookmarks">
          <span>
            <i className="uil uil-bookmark"></i>
          </span>
        </div>
      </div>
      <div className="liked-by">
        {/* <span>
          <img src="./img/profile-3.jpg" alt="" />
        </span>
        <span>
          <img src="./img/profile-2.jpg" alt="" />
        </span>
        <span>
          <img src="./img/profile-3.jpg" alt="" />
        </span>
        <span>
          <img src="./img/a.png" alt="" />
        </span>
        <p>
          liked by <b>Mahdi Chaaben</b> and <b> 3 others</b>
        </p> */}
      </div>
    </div>
  );
};

export default Feed;
