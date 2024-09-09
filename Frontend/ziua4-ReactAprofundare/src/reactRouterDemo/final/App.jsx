import React from "react";
import { RouterProvider } from "react-router-dom";
import configRouter from "./RouterProvider";

const App = () => {
  return <RouterProvider router={configRouter()}></RouterProvider>;
};

export default App;
