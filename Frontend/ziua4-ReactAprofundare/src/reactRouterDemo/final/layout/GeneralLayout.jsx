import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const GeneralLayout = () => {
  return (
    <Stack position={"relative"} height={"100vh"}>
      <Navbar></Navbar>
      <Stack marginX={"5rem"}>
        <Outlet />
      </Stack>
      <div
        style={{
          height: "10vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        footer
      </div>
    </Stack>
  );
};

export default GeneralLayout;
