import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import useIsAdmin from "../hooks/useIsAdmin";
import Header from "../pages/Shared/Header/Header";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isAdmin] = useIsAdmin(user?.email);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to={"/dashboard"}>My Appoinments</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to={"/dashboard/users"}>All users</Link>
                </li>
                <li>
                  <Link to={"/dashboard/adddoctor"}>Add Doctor</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
