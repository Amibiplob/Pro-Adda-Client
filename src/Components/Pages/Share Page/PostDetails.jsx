import { HandThumbDownIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useForm } from "react-hook-form";

const PostDetails = () => {
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
        const onSubmit = (data) => {
  console.log(data)
        };
        console.log(errors);

  return (
    <div>
      <div className="card w-4/5 bg-base-100 shadow-xl mx-auto">
        <div className="card-body pb-0">
          <div className="flex gap-3">
            <img
              className="w-10 h-10 rounded-full"
              src="https://placeimg.com/400/400/arch"
              alt="Album"
            />
            <h2 className="card-title">New album is released!</h2>
          </div>
          <p>Cliis ex loremcepturi incidunt!</p>
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
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-3 flex gap-2">
          <div className="w-full">
            <textarea
              className="border border-sky-700 bg-slate-100 w-full rounded-md placeholder:p-3"
              placeholder="Your Comment"
              {...register("Comment", {
                required: true,
              })}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              className="border border-sky-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl px-1 mt-3 cursor-pointer transition ease-in-out hover:-translate-1 hover:scale-110 duration-75"
            />
          </div>
        </form>

        <div className="flex gap-3 p-3">
          <img
            className="w-10 h-10 rounded-full"
            src="https://placeimg.com/400/400/arch"
            alt="Album"
          />
          <div>
            <h2 className="card-title">New album is released!</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corporis, odit suscipit. Sequi consectetur sit nam quos dolore,
              qui corrupti. Distinctio, assumenda quia, quidem nostrum corporis
              rem tempore explicabo soluta unde voluptates deserunt facilis, quo
              voluptate! Esse, harum unde obcaecati nisi dolore ducimus ea ipsum
              illum.6
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
