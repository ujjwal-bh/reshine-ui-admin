"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";

interface IProps {
  isAuthenticated: boolean;
}
export default function Header({ isAuthenticated }: IProps) {
  const [active, setActive] = useState(false);
  return (
    <>
      <div className="fixed top-0 w-full flex items-center justify-between h-16 shadow-md bg-background px-[5rem] z-10 lg:px-[1rem] ease-in">
        {/* left*/}
        <div className="flex">
          <div className="font-extrabold text-2xl text-primary h-10 flex items-center">
            Reshine
          </div>
          <div className="text-lg font-bold text-primary h-10 flex items-center ml-2 mt-0.5">
            Admin Dashboard
          </div>
        </div>
        <div
          className="hidden lg:block"
          onClick={() => setActive((prev) => !prev)}
        >
          {active ? <FaTimes /> : <FaBars />}
        </div>
        {isAuthenticated && (
          <div className="flex lg:hidden">bhattaraiujjwal26@gmail.com</div>
        )}
      </div>
      {isAuthenticated && <Sidebar active={active} setActive={setActive} />}
    </>
  );
}
