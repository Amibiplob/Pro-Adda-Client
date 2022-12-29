import { ArrowTopRightOnSquareIcon, HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Post = () => {
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body pb-0">
            <div className="flex gap-3">
              <img
                className="w-10 h-10 rounded-full"
                src="https://placeimg.com/400/400/arch"
                alt="Album"
              />
              <h2 className="card-title">New album is released!</h2>
            </div>
            <p>Cliis excepturi incidunt!</p>
          </div>
          <figure className="p-3 ">
            <img
              className="rounded"
              src="https://placeimg.com/400/400/arch"
              alt="Album"
            />
          </figure>
          <div className="flex gap-4 p-3 pt-0">
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
        </div>
        <hr />
      </div>
    );
};

export default Post;