import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, getPosts } from '../../Redux/actions/postsActions';

const CreatePost = ({ user }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState();
  const onChange = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost({ content: content, image: image }));
    dispatch(getPosts());
  };
  return (
    <>
      <div className="create-post">
        <div className="flex flex-row justify-between w-full">
          <input
            type="text"
            placeholder={`What's on your mind, ${user && user.name}?`}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="relative ">
            <input
              type="file"
              className="relative z-50 block h-full w-2 px-2 cursor-pointer  opacity-0"
              onChange={onChange}
            />
            <div className="absolute top-2 -left-2  text-center">
              <i className="uil uil-image-plus text-3xl"></i>
            </div>
          </div>
          <input
            type="submit"
            value="Post"
            className="btn btn-primary flex-grow-0"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
