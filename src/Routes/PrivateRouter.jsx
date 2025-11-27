import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading/Loading";

const PrivateRouter = ({ children }) => {
  const { user, userLoading } = useAuth();
  const location = useLocation();
  if (userLoading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRouter;
