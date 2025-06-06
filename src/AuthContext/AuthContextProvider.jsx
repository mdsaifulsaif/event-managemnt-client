import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useState } from "react";

export const AuthContext = createContext();

import React from "react";
import { auth } from "../Firebase";

function AuthContextProvider({ children }) {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  // create user
  const crateUser = (email, password) => {
    // setLodding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  //   current user

  const userInfo = {
    user,
    setUser,
    crateUser,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
