import React from 'react';
import { useForm } from 'react-hook-form';

const CreatePost = () => {
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
console.log(data);
      };
      console.log(errors);

    return (
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-3 flex gap-2 flex-col md:flex-row items-center"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Choose a Picture</span>
            </label>
            <input
              type="file"
              {...register("Picture", {
                required: true,
              })}
              className="file:p-1 file:px-3  file:rounded-xl border p-2 rounded-md text-xs bg-blue-50 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
            />
          </div>
          <div className="w-full">
            <label className="label">
              <span className="label-text">Type Your Text</span>
            </label>
            <textarea
              className="border border-sky-700 bg-slate-100 w-full rounded-md placeholder:p-3"
              placeholder="Your Text"
              {...register("PostText", {
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
      </div>
    );
};

export default CreatePost;