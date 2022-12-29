import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState("");

  const googleSignIn = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

const emailPasswordSignin=(email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
}











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
    emailPasswordSignin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
