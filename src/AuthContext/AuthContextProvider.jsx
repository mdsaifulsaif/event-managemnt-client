import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

import React from "react";
import { auth } from "../Firebase";
import axios from "axios";

function AuthContextProvider({ children }) {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState();
  const [lodding, setLodding] = useState(true);
  // create user
  const crateUser = (email, password) => {
    setLodding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLodding(true);
    return signInWithPopup(auth, provider);
  };

  // Login user
  const LoginUser = (email, password) => {
    setLodding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  //current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLodding(false);

      if (currentUser?.email) {
        const userData = { email: currentUser.email };
        axios
          .post("http://localhost:3000/jwt", userData, {
            withCredentials: true,
          })
          .then((res) => {})
          .catch((error) => {
            console.log(error);
          });
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    lodding,
    setUser,
    crateUser,
    googleLogin,
    LoginUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
