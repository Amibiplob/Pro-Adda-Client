import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { AuthContext } from "../Context/UserContext";
import { toast } from "react-toastify";
const Login = () => {
  
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [googleSigninError, setGoogleSigninError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const { googleSignIn, emailPasswordSignin } = useContext(AuthContext);
const navigate =useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
        const email = data.Email;
        const password = data.Password;
          if (!email || !password) {
            return;
          }
    console.log(data);

  emailPasswordSignin(email,password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
  toast.success("Success");
  navigate("/")

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorCode)
        toast.error({errorMessage});
    });





  }
  console.log(errors);




  
const signinWithGoogle=()=>{
  googleSignIn(googleProvider)
   .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
  toast.success("Success");
  navigate("/");

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
setGoogleSigninError(errorCode)
  });

}






  return (
    <div>
      <div className="">
        <div className="">
          <div className="card w-96 shadow-2xl mx-auto my-10">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <h1 className="text-2xl font-medium text-center">Login Here</h1>
              <hr />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("Email", {
                    required: "Name is required",
                    pattern: /^\S+@\S+$/i,
                  })}
                  aria-invalid={errors.Name ? "true" : "false"}
                  className="border p-2 rounded-md text-xs ransition ease-in-out hover:-translate-y-1 hover:scale-110 focus:-translate-y-1 focus:scale-110 duration-75"
                />
                {errors.Email && (
                  <p role="alert" className="text-error ml-1">
                    {errors.Email?.message}
                  </p>
                )}
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
                    {...register("Password", {
                      required: "Password is required",
                    })}
                    aria-invalid={errors.Password ? "true" : "false"}
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
                  {errors.Password && (
                    <p role="alert" className="text-error ml-1">
                      {errors.Password?.message}
                    </p>
                  )}
                </div>
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {error && (
                <p role="alert" className="text-error ml-1">
                  {error}
                </p>
              )}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="border border-sky-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-xl p-1 text-xl cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-75"
                />
              </div>
              <div>
                <h1 className="divider">Login with social accounts</h1>
                <p role="alert" className="text-error ml-1">
                  {googleSigninError}
                </p>
                <div
                  onClick={signinWithGoogle}
                  className="flex items-center gap-2 p-2 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 cursor-pointer rounded-md"
                >
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
                  <Link to="/register" className="link ml-2">
                    Register
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

export default Login;
