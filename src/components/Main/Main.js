import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadUser } from '../../Redux/actions/userAction';
import store from '../../Redux/store';
import FriendRequests from '../Friends/FriendRequests';
import Groups from '../Groups/Groups';
import Navbar from '../Nav/Navbar';
import Posts from '../Posts/Posts';
import Card from '../Profile/Card';
import SideBar from '../Sidebar/SideBar';
import Stories from '../stories/Stories';

const Main = () => {
  useEffect(() => {
    const fetchUser = async () => {
      await store.dispatch(loadUser());
    };
    fetchUser();
  }, []);

  const { user } = useSelector((state) => state.user);

  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="left">
            <Card user={user} />
            <SideBar />
          </div>
          <div className="middle">
            <Stories user={user} />
            <Posts user={user} />
          </div>
          <div className="right">
            <Groups />
            <FriendRequests />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
