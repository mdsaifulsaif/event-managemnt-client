import React, { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import { Navigate, useLocation } from "react-router";
import LoaddingSpinner from "../Components/LoaddingSpinner";

function PrivetRoute({ children }) {
  const { lodding, user } = useContext(AuthContext);

  const location = useLocation();

  if (lodding) {
    return <LoaddingSpinner></LoaddingSpinner>;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivetRoute;
