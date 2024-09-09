import React from "react";
import { AppProvider } from "./context";
import App from "./App";
import "./index.css";
const index = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};

export default index;
