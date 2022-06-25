import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPostsByUserId } from '../../Redux/actions/postsActions';
import { loadUser, loadUserById } from '../../Redux/actions/userAction';
import SendFriendRequest from '../Friends/SendFriendRequest';
import Loader from '../layouts/Loader';
import Navbar from '../Nav/Navbar';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, userByID } = useSelector(
    (state) => state.loadUserByIdReducer
  );
  const { loadingPosts, errorPosts, posts } = useSelector(
    (state) => state.postsByUserIdReducer
  );
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUserById(id));
    dispatch(getPostsByUserId(id));
    dispatch(loadUser());
  }, [dispatch, error]);
  return (
    <>
      <Navbar />
      <section className="mt-28">
        {loading ? (
          <Loader />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="container">
            <div className="mx-20 grid">
              {/* User Profile Tab Card  */}
              <div className="flex flex-row rounded-lg border border-gray-200/80 bg-white p-6">
                <div className="relative">
                  <img
                    className="h-40 w-40 rounded-md object-cover"
                    src={userByID && userByID.avatar && userByID.avatar.url}
                    alt="User"
                  />
                </div>
                {/* Meta Body  */}
                <div className="flex flex-col px-6">
                  {/* Username Container */}
                  <div className="flex h-8 flex-row ">
                    {/* Username */}
                    <span className="relative pr-10">
                      <h2 className="text-lg font-semibold">
                        {userByID && userByID.name}
                      </h2>
                      <div
                        className="absolute right-5  h-3 w-3 rounded-full border-4 border-white bg-green-400 sm:invisible sm:top-2 md:visible"
                        title="User is online"
                      ></div>
                    </span>
                    {/*online or nor*/}
                    {/* Online Status Dot  */}
                  </div>
                  {/* Meta Badges  */}
                  <div className="my-2 flex flex-row space-x-2">
                    {/* Badge Location */}
                    <div className="flex flex-row">
                      {userByID && userByID.ville ? (
                        <i className="uil uil-map-marker-alt text-lg"></i>
                      ) : (
                        <i className="uil uil-map-marker-question text-lg"></i>
                      )}

                      <div className="mt-1 text-xs text-gray-400/80 hover:text-gray-400">
                        {userByID && userByID.ville}
                      </div>
                    </div>
                  </div>
                  {/* Mini Cards  */}
                  <div className="mt-2 flex flex-row items-center space-x-5">
                    <a
                      href="#"
                      className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                    >
                      <div className="flex flex-row items-center justify-center">
                        <i className="uil uil-comment-dots"></i>

                        <span className="font-bold text-gray-600">
                          {' '}
                          {posts && posts.postCount}{' '}
                        </span>
                      </div>

                      <div className="mt-2 text-sm text-gray-400">Posts</div>
                    </a>
                    {/* Projects  */}
                    <a
                      href="#"
                      className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                    >
                      <div className="flex flex-row items-center justify-center">
                        <i className="uil uil-users-alt"></i>

                        <span className="font-bold text-gray-600"> 10</span>
                      </div>

                      <div className="mt-2 text-sm text-gray-400">Groups</div>
                    </a>
                    {/* Projects  */}
                    <a
                      href="#"
                      className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
                    >
                      <div className="flex flex-row items-center justify-center">
                        <i className="uil uil-schedule"></i>
                        <span className="font-bold text-gray-600"> 2</span>
                      </div>

                      <div className="mt-2 text-sm text-gray-400">Events</div>
                    </a>
                  </div>
                </div>
                {/* Right Actions Container  */}
                <div className="w-100 flex flex-grow flex-col items-end justify-start">
                  <div className="flex flex-row space-x-3">
                    {user && user._id === id ? (
                      <button className="flex rounded-md bg-gray-200 py-2 px-4 text-black transition-all duration-150 ease-in-out hover:bg-blue-600">
                        <i className="uil uil-pen"></i>
                        Edit your profile
                      </button>
                    ) : (
                      <SendFriendRequest user={user} userByID={userByID} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Profile;
