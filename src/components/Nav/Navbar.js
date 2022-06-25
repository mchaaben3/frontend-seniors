import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadUser } from '../../Redux/actions/userAction';
import store from '../../Redux/store';

const Navbar = () => {
  useEffect(() => {
    const fetchUser = async () => {
      await store.dispatch(loadUser());
    };
    fetchUser();
  }, []);

  const { user } = useSelector((state) => state.user);

  return (
    <nav>
      <div className="container">
        <Link to="/">SENIORS APP</Link>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input type="search" placeholder="Search" />
        </div>
        <div className="create">
          <label className="btn btn-primary">Create</label>
        </div>
        <div className="profile-picture">
          <img src={user && user.avatar && user.avatar.url} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
