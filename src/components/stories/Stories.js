import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStories } from '../../Redux/actions/storiesActions';
import { Story, CreateStory } from './Story.styled';
const Stories = ({ user }) => {
  const dispatch = useDispatch();
  const { stories } = useSelector((state) => state.stories);
  useEffect(() => {
    dispatch(getStories());
  }, [dispatch]);
  return (
    <div className="stories">
      <CreateStory bg={user && user.avatar && user.avatar.url}>
        <div className="w-full h-1/3 bg-gray-900 flex relative bottom-0">
          <div className="add-story absolute -top-3 left-1/4">
            <i className="fas fa-plus"></i>
          </div>
        </div>
      </CreateStory>

      {stories && stories.length > 0 ? (
        stories.map((story, index) => (
          <Story key={index} bg={story.image.url}>
            <div className="profile-picture">
              <img src={story.user.avatar.url} alt="" />
            </div>
            <div className="name">{story.user.name}</div>
          </Story>
        ))
      ) : (
        <div> loading...</div>
      )}
    </div>
  );
};

export default Stories;
