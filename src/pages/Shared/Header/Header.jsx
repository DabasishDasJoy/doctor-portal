import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const navlist = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link to={"/appoinment"}>Appoinment</Link>
      </li>

      <li>
        <Link>Contact Us</Link>
      </li>
      <li>
        {user && user?.uid ? (
          <>
            <Link to={"/dashboard"}>Dashboard</Link>

            <button
              onClick={handleLogout}
              className="btn btn-accent text-white rounded-md"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to={"/login"} className="btn btn-accent text-white rounded-md">
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlist}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navlist}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Header;
