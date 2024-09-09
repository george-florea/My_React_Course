import React from "react";
import { useAccount } from "./AuthContext";

const Navbar = () => {
  const { isAuth } = useAccount();
  return <div>{isAuth ? "authenticated" : "logged out"}</div>;
};

export default Navbar;
