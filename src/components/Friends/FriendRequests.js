import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../layouts/Loader';
import {
  getFriendRequests,
  acceptFriendRequest,
} from '../../Redux/actions/userAction';
import { getTimeSince } from '../functions/TimeSince';

const FriendRequests = () => {
  const dispatch = useDispatch();

  const { loading, error, friendRequests } = useSelector(
    (state) => state.friendRequest
  );
  useEffect(() => {
    dispatch(getFriendRequests());
  }, [dispatch]);
  const handleAcceptFriend = (id) => {
    dispatch(acceptFriendRequest(id));
  };

  return (
    <div className="friend-requests">
      <h4>Requests</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <div>{error}</div>
      ) : friendRequests && friendRequests.length > 0 ? (
        friendRequests.map((friendRequest) => (
          <div key={friendRequest._id} className="request">
            <div className="info">
              <div className="profile-picture">
                <img src={friendRequest.requester.avatar.url} alt="profile" />
              </div>
              <div>
                <h5 className="name">{friendRequest.requester.name}</h5>
                <small className="text-muted">
                  {getTimeSince(friendRequest.createdAt)}
                </small>
              </div>
            </div>

            <div className="action">
              <button
                className="btn btn-primary screen-fit"
                onClick={() => handleAcceptFriend(friendRequest.requester._id)}
              >
                Accept
              </button>
              <button className="btn btn-danger screen-fit">Reject</button>
            </div>
          </div>
        ))
      ) : (
        <div>No friend requests</div>
      )}
    </div>
  );
};

export default FriendRequests;
