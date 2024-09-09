import { createBrowserRouter } from "react-router-dom";
import React from "react";
import GeneralLayout from "./layout/GeneralLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
export default function configRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <GeneralLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
}
