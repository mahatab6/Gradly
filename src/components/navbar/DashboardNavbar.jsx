import React from "react";
import { Link } from "react-router";
import ThemeToggle from "../ThemeToggle";


export default function DashboardNavbar({ id }) {
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
          <Link to={'/dashboard'} className='text-2xl font-bold text-blue-600'>Gradly</Link>
        </div>
        <div className="navbar-end ">
          <ThemeToggle/>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-12 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
