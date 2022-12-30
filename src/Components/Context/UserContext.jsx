import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const UserContext = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState("");
 const [loader, setLoader] = useState(true);

  const googleSignIn = (googleProvider) => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };

const createEmailPasswordSignin=(email,password)=>{
      setLoader(true);
   return createUserWithEmailAndPassword(auth, email, password)
}



const emailPasswordSignin=(email,password)=>{
      setLoader(true);
   return signInWithEmailAndPassword(auth, email, password);
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
    createEmailPasswordSignin,
    emailPasswordSignin,
    loader
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
