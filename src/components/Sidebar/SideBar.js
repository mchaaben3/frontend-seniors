import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/actions/userAction';

const SideBar = () => {
  const [isActive, setIsActive] = useState({ activeIndex: null });
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (index) => {
    // 👇️ toggle isActive state on click
    setIsActive({ activeIndex: index });
  };
  const notification = () => {
    setIsOpen(!isOpen);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/signin');
  };
  return (
    <div className="sidebar ">
      <Link
        to={'/'}
        className={`menu-item ${isActive.activeIndex === 0 ? `active` : ``}`}
        onClick={() => handleClick(0)}
      >
        <span>
          {' '}
          <i className="uil uil-home"></i>
        </span>
        <h4>Home</h4>
      </Link>

      <a className={`menu-item ${isActive.activeIndex === 1 ? `active` : ``}`}>
        <span>
          {' '}
          <i className="uil uil-bell">
            <small className="notifications-count">+2</small>
          </i>
        </span>
        <h4
          onClick={() => {
            handleClick(1);
            notification();
          }}
        >
          Notifications
        </h4>
        <div
          className={`notifications-popup  ${
            isActive.activeIndex === 1 && isOpen === false ? `block` : `hidden`
          }`}
        >
          <div>
            <div className="profile-picture">{/* Img here */}</div>
            <div className="notification-body">
              <b>Kais Saied</b> added you as a friend{' '}
              <small className="text-muted">2 DAYS AGO</small>
            </div>
          </div>
          <div>
            <div className="profile-picture">{/* Img here */}</div>
            <div className="notification-body">
              <b>Kais Saied</b> added you as a friend
              <small className="text-muted">2 DAYS AGO</small>
            </div>
          </div>
        </div>
      </a>

      <a
        className={`menu-item ${isActive.activeIndex === 2 ? `active` : ``}`}
        onClick={() => handleClick(2)}
      >
        <span>
          {' '}
          <i className="uil uil-envelope"></i>
        </span>
        <h4>Messages</h4>
      </a>

      <a
        className={`menu-item ${isActive.activeIndex === 3 ? `active` : ``}`}
        onClick={() => handleClick(3)}
      >
        <span>
          {' '}
          <i className="uil uil-book"></i>
        </span>
        <h4>Timeline</h4>
      </a>

      <a
        className={`menu-item ${isActive.activeIndex === 4 ? `active` : ``}`}
        onClick={() => handleClick(4)}
      >
        <span>
          {' '}
          <i className="uil uil-user"></i>
        </span>
        <h4>Profile</h4>
      </a>

      <a
        className={`menu-item ${isActive.activeIndex === 5 ? `active` : ``}`}
        onClick={() => handleClick(5)}
      >
        <span>
          {' '}
          <i className="uil uil-cog"></i>
        </span>
        <h4>Settings</h4>
      </a>

      <a className="menu-item " onClick={handleLogout}>
        <span>
          {' '}
          <i className="uil uil-sign-out-alt"></i>
        </span>
        <h4>Logout</h4>
      </a>
    </div>
  );
};

export default SideBar;
