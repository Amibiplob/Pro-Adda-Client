import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
    const name =data.Name;
    const email =data.Email;
    const password =data.Password;
    console.log(data.Picture[0]);
  }
  console.log(errors);

  return (
    <div>
      <div className="">
        <div className="">
          <div className="card w-96 shadow-2xl mx-auto my-10">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-2xl font-medium text-center">
                Register Here
              </h1>
              <hr />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  {...register("Name", {
                    required: true,
                  })}
                  className="border p-2 rounded-md text-xs ransition ease-in-out hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 duration-75"
                />
                <span className="text-error ml-1">error</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="border p-2 rounded-md text-xs ransition ease-in-out hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 duration-75"
                />
                <span className="text-error ml-1">error</span>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    maxLength={32}
                    minLength={6}
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                    className="border p-2 rounded-md text-xs w-full ransition ease-in-out hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 duration-75"
                    {...register("Passeord", {
                      required: true,
                    })}
                  />
                  {showPass ? (
                    <EyeSlashIcon
                      onClick={() => setShowPass(!true)}
                      className="h-6 w-6 absolute right-3 top-2"
                    />
                  ) : (
                    <EyeIcon
                      onClick={() => setShowPass(true)}
                      className="h-6 w-6 absolute right-3 top-2"
                    />
                  )}
                  <span className="text-error ml-1">error</span>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Picture</span>
                </label>
                <input
                  type="file"
                  {...register("Picture", {
                    required: true,
                  })}
                  className="file:p-1 file:px-3  file:rounded-xl border p-2 rounded-md text-xs bg-blue-50 cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="border border-sky-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl p-1 text-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
                />
              </div>
              <div>
                <h1 className="divider">Login with social accounts</h1>
                <div className="flex items-center gap-2 p-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 cursor-pointer rounded-md transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75">
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                  </svg>
                  <p>Login with Google</p>
                </div>
                <p className="mt-3">
                  Don't have an account?
                  <Link to="/login" className="link ml-2">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
