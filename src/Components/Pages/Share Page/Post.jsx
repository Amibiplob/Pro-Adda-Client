import { ArrowTopRightOnSquareIcon, HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Post = ({data}) => {
  console.log(data)
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center'>
        {data.map((post) => (
          <div key={post._id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body pb-0">
              <div className="flex gap-3">
                <img
                  className="w-10 h-10 rounded-full border shadow"
                  src={post.userPhoto}
                  alt={post.userName}
                />
                <h2 className="card-title">{post.userName}</h2>
              </div>
              <p>{post.postText}</p>
            </div>
            <figure className="p-3 ">
              <img className="rounded border shadow" src={post.postImg} alt={post.postText} />
            </figure>
            <div className="flex p-3 pt-0">
              <div className="badge badge-outline p-3">
                77
                <HandThumbUpIcon className="h-6 w-6 mx-2 text-green-700" />
                like
              </div>
              <div className="badge badge-outline p-3">
                77
                <HandThumbDownIcon className="h-6 w-6 mx-2 text-red-500" />
                dislike
              </div>
              <div className="badge w-full badge-outline p-3">
                Comment
                <ArrowTopRightOnSquareIcon className="h-6 w-6 mx-2" />
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
};

export default Post;