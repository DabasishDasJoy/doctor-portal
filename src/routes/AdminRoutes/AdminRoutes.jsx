import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useIsAdmin from "../../hooks/useIsAdmin";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  const [isAdmin, isAdminLoading] = useIsAdmin(user?.email);
  console.log(
    "🚀 ~ file: AdminRoutes.jsx ~ line 11 ~ AdminRoutes ~ adminLoading",
    isAdminLoading
  );

  console.log(user);
  if (loading || isAdminLoading) {
    return <h1> Loadind</h1>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
