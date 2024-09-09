import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Navbar = () => {
  return (
    <div
      style={{ height: "10vh", display: "flex", alignItems: "center", justifyContent: "space-between" }}
    >
      <Link to={"/login"}>
        <Typography textAlign="center">Login</Typography>
      </Link>
      <Link to={"/"}>
        <Typography textAlign="center">Home</Typography>
      </Link>
    </div>
  );
};

export default Navbar;
