import React from "react";
import { Link, useNavigate } from "react-router";
import ThemeToggle from "../ThemeToggle";
import useAuth from "../../hooks/useAuth";
import { FaRegUserCircle } from "react-icons/fa";

export default function DashboardNavbar({ id }) {
  const { user, LogOut } = useAuth();
  const navigate = useNavigate();

  const signOut = () => {
    LogOut();
    navigate("/");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="w-11/12 mx-auto flex">
        <div className="navbar-start gap-5">
          <label htmlFor={id} className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <Link to={"/dashboard"} className="text-2xl font-bold text-blue-600">
            Gradly
          </Link>
        </div>
        <div className="navbar-end ">
          <ThemeToggle />
          <div className="dropdown dropdown-bottom dropdown-end hover:cursor-pointer">
            <div className="avatar" tabIndex={0} role="button">
              <div className="ring-primary ring-offset-base-100 w-12 rounded-full">
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <FaRegUserCircle size={30} />
                )}
              </div>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <button onClick={() => signOut()}>Log out</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
