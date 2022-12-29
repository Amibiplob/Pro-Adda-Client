import React from 'react';
import CreatePost from './Share Page/CreatePost';

const Profile = () => {
    return (
      <div>
        <div className='flex flex-col md:flex-row items-center md:justify-evenly gap-5 py-10 my-10 rounded-lg mx-auto shadow-lg md:w-1/2 bg-slate-200'>
          <img
            className="w-44 h-44 md:w-60 md:h-60 rounded-full"
            src="https://placeimg.com/400/400/arch"
            alt="Album"
          />
          <div>
            <h1>name</h1>
            <h1>name</h1>
            <h1>name</h1>
            <h1>name</h1>
          </div>
        </div>
        <CreatePost></CreatePost>
      </div>
    );
};

export default Profile;