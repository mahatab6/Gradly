import React from "react";
import { Link } from "react-router";

export default function AuthNavbar() {
  return (
    <div className="navbar bg-white shadow-sm border-b border-black">
      <div className="w-11/12 mx-auto">
        <div className="navbar-start ">
          <Link to={'/'} className='text-2xl font-bold text-black text-blue-600'>Gradly</Link>
        </div>
        <div className="navbar-end gap-3">
          <Link to={"/login"} className="btn">
            Login
          </Link>
          <Link to={"/register"} className="btn">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
