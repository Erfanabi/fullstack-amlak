"use client";

import { FiLogOut } from "react-icons/fi";
import "./LogoutButton.css";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const logOutHandler = () => {
    signOut();
  };

  return (
    <button onClick={logOutHandler}>
      <FiLogOut />
      خروج
    </button>
  );
};

export default LogoutButton;
