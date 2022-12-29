import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { current } from "daisyui/src/colors";
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState("");

  const googleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };












  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);








  const authInfo = {
    auth,
    googleSignIn,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
