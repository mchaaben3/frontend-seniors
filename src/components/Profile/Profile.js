import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, login } from '../../Redux/actions/userAction';
import store from '../../Redux/store';
const Profile = ({ user }) => {
  return (
    <>
      {
        <a className="profile">
          <div className="profile-picture">
            <img src={user && user.avatar && user.avatar.url} />
          </div>
          <div className="handle">
            <h3>{user && user.name}</h3>
            <p className="text-muted">@mchaaben3</p>
          </div>
        </a>
      }
    </>
  );
};

export default Profile;

/* 
      )} */
