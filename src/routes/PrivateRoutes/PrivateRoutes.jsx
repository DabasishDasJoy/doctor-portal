import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  console.log(user);
  if (loading) {
    return <h1> Loadind</h1>;
  }
  if (user && user?.uid) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default PrivateRoutes;
