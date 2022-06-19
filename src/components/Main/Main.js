import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../Redux/actions/userAction';
import store from '../../Redux/store';
import Navbar from '../Nav/Navbar';
import Posts from '../Posts/Posts';
import Profile from '../Profile/Profile';
import SideBar from '../Sidebar/SideBar';

const Main = () => {
  useEffect(() => {
    const fetchUser = async () => {
      await store.dispatch(loadUser());
    };
    fetchUser();
  }, []);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Navbar user={user} />
      <main>
        <div className="container">
          <div className="left">
            <Profile user={user} />
            <SideBar />
          </div>
          <Posts />
        </div>
      </main>
    </>
  );
};

export default Main;
