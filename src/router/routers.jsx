import { createBrowserRouter } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/authpages/login";
import Home from "../components/Home";
import Register from "../pages/authpages/register";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Schedule from "../pages/Dashboard/Schedule";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout/>,
    children:[
        {
            index: true,
            element:<Home/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"register",
            element:<Register/>
        },
    ]
  },
  {
    path:"/dashboard",
    element:<MainLayout/>,
    children:[
      {
        index: true,
        element:<Dashboard/>
      },
      {
        path:"schedule",
        element:<Schedule/>
      }
    ]
  },
]);