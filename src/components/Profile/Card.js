import React, { useEffect, useState } from 'react';

const Card = ({ user }) => {
  return (
    <>
      {
        <a className="profile">
          <div className="profile-picture">
            <img src={user && user.avatar && user.avatar.url} />
          </div>
          <div className="handle">
            <h3>{user && user.name}</h3>
            <p className="text-muted">@{user && user.name}</p>
          </div>
        </a>
      }
    </>
  );
};

export default Card;

/* 
      )} */
