import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Protected = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  if (user && isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }}/>
  }
};

export default Protected;
