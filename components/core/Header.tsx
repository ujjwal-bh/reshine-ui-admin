"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { FaBars, FaTimes } from "react-icons/fa";
import { User, UserCircle } from "lucide-react";

interface IProps {
  isAuthenticated: boolean;
  name?: string 
}
export default function Header({ isAuthenticated, name }: IProps) {
  const path = usePathname();
  const [active, setActive] = useState(false);
  return (
    <>
      <header className="fixed top-0 w-full flex items-center justify-between h-16 shadow-md bg-background px-[5rem] z-10 lg:px-[1rem] ease-in">
        {/* left*/}
        <div className="flex md:items-center">
          <h1 className="font-extrabold text-2xl text-primary h-10 flex items-center md:text-xl">
            Reshine
          </h1>
          <h2 className="text-lg font-bold text-slate-500 h-10 flex items-center ml-2 mt-0.5 md:text-[1rem]">
            Admin Dashboard
          </h2>
        </div>
        {!(path.split("/")[1] === "login") && (
          <div
            className="hidden lg:block"
            onClick={() => setActive((prev) => !prev)}
          >
            {active ? <FaTimes /> : <FaBars />}
          </div>
        )}
        {isAuthenticated && name &&  (
          <div className="flex items-center gap-2 capitalize lg:hidden">
            <UserCircle/>
            <span>{name}</span>
          </div>
        )}
      </header>
      {isAuthenticated && <Sidebar active={active} setActive={setActive} />}
    </>
  );
}
