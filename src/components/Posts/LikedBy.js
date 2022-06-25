import React, { useEffect } from 'react';

const LikedBy = ({ likes }) => {
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
              <b> {likes && likes.length - 1} others</b>
            ) : (
              ''
            )}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default LikedBy;
