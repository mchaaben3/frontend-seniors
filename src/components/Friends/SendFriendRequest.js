import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFriendRequestById,
  sendFriendRequest,
} from '../../Redux/actions/userAction';
import Loader from '../layouts/Loader';

const SendFriendRequest = ({ user, userByID }) => {
  const [isFriend, setIsFriend] = useState({});
  const dispatch = useDispatch();
  const { loading, error, friendRequestSent } = useSelector(
    (state) => state.friendRequestSent
  );
  const handleSendFriendRequest = () => {
    dispatch(sendFriendRequest(userByID._id));
  };
  const { friendRequestById } = useSelector(
    (state) => state.getFriendRequestByIdReducer
  );
  useEffect(() => {
    userByID && dispatch(getFriendRequestById(userByID._id));
    friendRequestById && setIsFriend(friendRequestById);
  }, [friendRequestById, userByID]);

  return (
    <>
      {isFriend && isFriend.status == 0 ? (
        <button
          onClick={handleSendFriendRequest}
          className="flex rounded-md bg-gray-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-gray-600"
        >
          Pending
        </button>
      ) : isFriend && isFriend.status == 1 ? (
        <h3>Delete friend</h3>
      ) : (
        <button
          onClick={handleSendFriendRequest}
          className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
        >
          {loading ? (
            <Loader />
          ) : error ? (
            <div>{error}</div>
          ) : friendRequestSent ? (
            <div>Friend Request Sent</div>
          ) : (
            <>
              <i className="uil uil-plus"></i>
              Add as friend
            </>
          )}
        </button>
      )}
    </>
  );
};

export default SendFriendRequest;
