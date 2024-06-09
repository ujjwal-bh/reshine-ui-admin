"use client";
import React from "react";
import {
  FaBook,
  FaCartArrowDown,
  FaExclamationTriangle,
  FaHome,
  FaMoneyBill,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { FaShirt, FaSquarePollVertical, FaTruckFast } from "react-icons/fa6";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

interface IProps{
  active: boolean,
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}
export default function Sidebar({active, setActive}: IProps) {
  const { push } = useRouter();
  const handleLogout = () => {
    setActive(false)
    push("/login");
  };
  return (
    <aside className={`fixed top-[4.5rem] lg:top-[4.15rem] z-10 left-0 bottom-0 w-[22.5rem] pt-4 bg-background shadow-lg border-r border-r-gray-200 lg:w-full ${!active && "lg:left-[-100%]"}`}>
      <MenuItem Icon={FaHome} path="/" onClick={()=> setActive(false)}>
        Home
      </MenuItem>
      <MenuItem Icon={FaTruckFast} path="/delivery" onClick={()=> setActive(false)}>
        Delivery
      </MenuItem>
      <MenuItem Icon={FaUser} path="/users" onClick={()=> setActive(false)}>
        Users
      </MenuItem>
      <MenuItem Icon={FaCartArrowDown} path="/orders" onClick={()=> setActive(false)}>
        Orders
      </MenuItem>
      <MenuItem Icon={FaMoneyBill} path="/payment-details" onClick={()=> setActive(false)}>
        Payment details
      </MenuItem>
      <MenuItem Icon={FaShirt} path="/clothes" onClick={()=> setActive(false)}>
        Clothes
      </MenuItem>
      <MenuItem Icon={FaSquarePollVertical} path="/services" onClick={()=> setActive(false)}>
        Services
      </MenuItem>
      <MenuItem Icon={FaExclamationTriangle} path="/issues" onClick={()=> setActive(false)}>
        User Issues
      </MenuItem>
      <MenuItem Icon={FaBook} path="/site-content" onClick={()=> setActive(false)}>
        Site Content
      </MenuItem>
      <MenuItem Icon={FaSignOutAlt} onClick={handleLogout}>
        logout
      </MenuItem>
    </aside>
  );
}
