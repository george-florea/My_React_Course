import React from "react";
import { AccountProvider } from "./AuthContext";
import Container from "./Container";
import Navbar from "./Navbar";

const App = () => {
  return (
    <AccountProvider>
      <Navbar />
      <Container />
    </AccountProvider>
  );
};

export default App;
