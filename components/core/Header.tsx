"use client"
import React, { useState } from "react";


interface IProps{
  isAuthenticated: boolean
}
export default function Header({isAuthenticated}: IProps) {
    // const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <div className="fixed top-0 w-full flex items-center justify-between h-20 shadow-md bg-background px-[5rem] z-10">
        {/* left*/}
      <div className="flex">
        <div className="font-extrabold text-2xl text-primary h-10 flex items-center">
          Reshine
        </div>
        <div className="text-lg font-bold text-primary h-10 flex items-center ml-2 mt-0.5">
          Admin Dashboard
        </div>
      </div>
      {
        isAuthenticated && 
        <div className="flex bg">
            bhattaraiujjwal26@gmail.com
        </div>
      }
    </div>
  );
}
