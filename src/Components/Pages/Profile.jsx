import React, { useContext } from "react";
import { AuthContext } from "../Context/UserContext";
import CreatePost from "./Share Page/CreatePost";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email, uid, photoURL, emailVerified } = user;
  console.log(user)
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center md:justify-evenly gap-5 py-10 my-10 rounded-lg mx-auto shadow-lg md:w-1/2 bg-slate-200">
        <img
          className="w-44 h-44 md:w-60 md:h-60 rounded-full"
          src={photoURL}
          alt={displayName}
        />
        <div>
          <h1 className="text-3xl">Name : {displayName}</h1>
          <h1 className="text-xl">Email :{email}</h1>
          <p>UID : {uid}</p>
          <div className="flex"><p>Email Verify : </p>
          {emailVerified ? <span className="text-green-800">True</span>:<span className="text-red-800">False</span>}</div>
        </div>
      </div>
      <CreatePost></CreatePost>
    </div>
  );
};

export default Profile;
