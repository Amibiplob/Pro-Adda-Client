import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import {  signOut } from "firebase/auth";

const Navbar = () => {
  const { user,auth } = useContext(AuthContext);

const navigate=useNavigate()
const logOut=()=>{
  signOut(auth)
    .then(() => {
      // Sign-out successful.
   navigate("/")
    })
    .catch((error) => {
      // An error happened.
    });

}





  return (
    <div>
      <div className="navbar border-indigo-600 border-b-2">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Pro Adda
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex gap-1 md:gap-3">
            <NavLink to="/home">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? "shadow-md p-1 bg-teal-50 rounded text-teal-600 hover:text-teal-800"
                      : "shadow-sm hover:shadow-md p-1 hover:bg-teal-50 rounded"
                  }
                >
                  Home
                </span>
              )}
            </NavLink>

            {user ? (
              <>
                <NavLink to="/messages">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? "shadow-md p-1 bg-teal-50 rounded text-teal-600 hover:text-teal-800"
                          : "shadow-sm hover:shadow-md p-1 hover:bg-teal-50 rounded"
                      }
                    >
                      Messages(0)
                    </span>
                  )}
                </NavLink>
                <NavLink to="/profile">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? "shadow-md p-1 bg-teal-50 rounded text-teal-600 hover:text-teal-800"
                          : "shadow-sm hover:shadow-md p-1 hover:bg-teal-50 rounded"
                      }
                    >
                      Profile
                    </span>
                  )}
                </NavLink>
                <li
                  onClick={logOut}
                  className="shadow-sm hover:shadow-md px-1 cursor-pointer rounded hover:text-teal-800 hover:bg-teal-50"
                >
                  Log Out
                </li>
              </>
            ) : (
              <>
                <NavLink to="/login">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? "shadow-md p-1 bg-teal-50 rounded text-teal-600 hover:text-teal-800"
                          : "shadow-sm hover:shadow-md p-1 hover:bg-teal-50 rounded"
                      }
                    >
                      Login
                    </span>
                  )}
                </NavLink>
                <NavLink to="/register">
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? "shadow-md p-1 bg-teal-50 rounded text-teal-600 hover:text-teal-800"
                          : "shadow-sm hover:shadow-md p-1 hover:bg-teal-50 rounded"
                      }
                    >
                      Register
                    </span>
                  )}
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
