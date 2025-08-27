import React from "react";
import DashboardNavbar from "../components/navbar/DashboardNavbar";
import { Link, Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <div className="drawer ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <DashboardNavbar id={"my-drawer-2"} />
          {/* Child pages will render here */}
          <div className="p-4">
            <Outlet/>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <Link to={'/dashboard'} >Dashboard</Link>
            </li>
            <li>
              <Link to={'/dashboard/schedule'}>Class Schedule</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
