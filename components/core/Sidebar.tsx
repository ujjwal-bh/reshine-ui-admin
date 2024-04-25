"use client";
import React from "react";
import {
  FaBook,
  FaCartArrowDown,
  FaExclamationTriangle,
  FaHome,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import MenuItem from "./MenuItem";
import { FaShirt, FaSquarePollVertical, FaTruckFast } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const { push } = useRouter();
  const handleLogout = () => {
    push("/login");
    console.log("jello")
  };
  return (
    <div className="fixed top-[5.25rem] bottom-0 w-[22.5rem] pt-4 bg-background shadow-lg border-r border-r-gray-200 z-0">
      <MenuItem Icon={FaHome} path="/">
        Home
      </MenuItem>
      <MenuItem Icon={FaTruckFast} path="/delivery">
        Delivery
      </MenuItem>
      <MenuItem Icon={FaUser} path="/users">
        Users
      </MenuItem>
      <MenuItem Icon={FaCartArrowDown} path="/orders">
        Orders
      </MenuItem>
      <MenuItem Icon={FaShirt} path="/clothes">
        Clothes
      </MenuItem>
      <MenuItem Icon={FaSquarePollVertical} path="/services">
        Services
      </MenuItem>
      <MenuItem Icon={FaExclamationTriangle} path="/issues">
        User Issues
      </MenuItem>
      <MenuItem Icon={FaBook} path="/site-content">
        Site Content
      </MenuItem>
      <MenuItem Icon={FaSignOutAlt} onClick={handleLogout}>
        logout
      </MenuItem>
    </div>
  );
}
