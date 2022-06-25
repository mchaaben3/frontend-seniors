import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { likePost } from '../../Redux/actions/postsActions';
import { getTimeSince } from '../functions/TimeSince';
import Actions from './Actions.old';
import LikedBy from './LikedBy';

const Feed = ({
  user,
  createdAt,
  content,
  image,
  id,
  likes,
  userConnected,
}) => {
  const timeSince = getTimeSince(createdAt);

  return (
    <div className="feed">
      <div className="head">
        <Link to={`/profile/${user._id}`} className="user">
          <div className="profile-picture">
            <img src={user.avatar.url} />
          </div>
          <div className="info">
            <h3>{user.name}</h3>
            <small className="text-muted"> {timeSince} </small>
          </div>
        </Link>

        <div className="edit">
          <i className="uil uil-ellipsis-h"></i>
        </div>
      </div>
      <div className="feed-body">
        <div className="photo">
          <img src={image.url} />
        </div>
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
      <Actions id={id} likes={likes} userConnected={userConnected} />
    </div>
  );
};

export default Feed;
