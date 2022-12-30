import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/UserContext";

const CreatePost = () => {
  const imgbbKey = process.env.REACT_APP_imgBB_key;
  const { user } = useContext(AuthContext);
  const { displayName, email, uid, photoURL } = user;
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      PostText: "",
    },
  });

  const onSubmit = (data) => {
    const image = data.Picture[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        const postDetails = {
          userName: displayName,
          userEmail: email,
          userUID: uid,
          userPhoto: photoURL,
          postImg: result.data.url,
          postText: data.PostText,
        };

        fetch("https://pro-adda-server.vercel.app/post", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(postDetails),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              resetField("PostText");
              console.log(data);
            }
          });
      });
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
              required: "Picture is required",
            })}
            aria-invalid={errors.Picture ? "true" : "false"}
            className="file:p-1 file:px-3  file:rounded-xl border p-2 rounded-md text-xs bg-blue-50 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
          />
          {errors.Picture && (
            <p role="alert" className="text-error ml-1">
              {errors.Picture?.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Type Your Text</span>
          </label>
          <textarea
            className="border border-sky-700 bg-slate-100 w-full rounded-md placeholder:p-3 cursor-pointer transition ease-in-out hover:-translate-1 hover:scale-110 duration-75"
            placeholder="Your Text"
            {...register("PostText", {
              required: "Post Text is required",
            })}
            aria-invalid={errors.PostText ? "true" : "false"}
          ></textarea>
          {errors.PostText && (
            <p role="alert" className="text-error ml-1">
              {errors.PostText?.message}
            </p>
          )}
        </div>
        <div>
          <input
            type="submit"
            className="border border-sky-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl px-10 py-3 md:py-2 md:px-2 mt-7 cursor-pointer transition ease-in-out hover:-translate-1 hover:scale-110 duration-75"
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
