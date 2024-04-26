"use client"

import Back from "@/components/ui/Back";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import React, { useState } from "react";
import { FaEnvelope, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";

export default function AddDeliveryUser() {
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  return (
    <MainWarapper>
     <div className="flex items-center gap-8">
           <Back/>
        <SectionTitle>Add Delivery Person</SectionTitle>
        </div>
      <form className="w-[50%] flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <InputWithIcon
            placeholder="delivery person name"
            LeftIcon={FaUser}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <InputWithIcon
            placeholder="someone@gmail.com"
            LeftIcon={FaEnvelope}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Password</label>
          <InputWithIcon
            type={`${showPass ? "text": "password"}`}
            placeholder="* * * * * * * *"
            LeftIcon={FaLock}
            RightIcon={FaEyeSlash}
            rightIconClasses={`${showPass ? "text-primary": "text-gray-400"}`}
            rightIconClick={()=> setShowPass(prev => !prev)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="conformPassword">Confirm Password</label>
          <InputWithIcon
            type={`${showPass ? "text": "password"}`}
            placeholder="* * * * * * * *"
            LeftIcon={FaLock}
            RightIcon={FaEyeSlash}
            rightIconClasses={`${showConfirmPass ? "text-primary": "text-gray-400"}`}
            rightIconClick={()=> setShowConfirmPass(prev => !prev)}
          />
        </div>
        <div className="flex my-2 gap-4 items-center">
          <label
            htmlFor="active"
            // className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Make the user active
          </label>
          <Checkbox />
        </div>
        <div>
          <Button className="w-48" type="submit">
            Add User
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}
