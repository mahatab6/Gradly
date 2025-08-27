import React from "react";
import { Link } from "react-router";
import Logo from "../Logo";

export default function AuthNavbar() {
  return (
    <div className="navbar bg-white shadow-sm border-b border-black">
      <div className="w-11/12 mx-auto">
        <div className="navbar-start ">
          <Logo/>
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
