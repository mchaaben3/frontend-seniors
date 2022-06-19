import React from 'react';

const Navbar = ({ user }) => {
  return (
    <nav>
      <div className="container">
        <h2 className="log">Seniors Social</h2>
        <div className="search-bar">
          <i className="uil uil-search"></i>
          <input type="search" placeholder="Search" />
        </div>
        <div className="create">
          <label className="btn btn-primary">Create</label>
          <div className="profile-picture">
            <img src={user && user.avatar && user.avatar.url} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
