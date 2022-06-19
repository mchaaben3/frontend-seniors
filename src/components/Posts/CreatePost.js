import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, getPosts } from '../../Redux/actions/postsActions';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ content: content }));
    dispatch(getPosts());
  };
  return (
    <form className="create-post">
      <div className="profile-picture">{/* img */}</div>
      <input
        type="text"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="submit"
        value="Post"
        className="btn btn-primary"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default CreatePost;
