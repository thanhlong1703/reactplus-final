import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DefaulLayout from "../layout/DefaulLayout";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <DefaulLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
