import { createContext } from "react";

export const AuthContext = createContext();

import React from "react";

function AuthContextProvider({ children }) {
  const userInfo = {
    name: "saiful islam",
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
