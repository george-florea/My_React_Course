import React from "react";
import { useAccount } from "./AuthContext";

const Button = () => {
  const { isAuth, handleAuthChange } = useAccount();
  return (
    <div>
      <button onClick={handleAuthChange}>
        {isAuth ? "log out" : "log in"}
      </button>
    </div>
  );
};

export default Button;
