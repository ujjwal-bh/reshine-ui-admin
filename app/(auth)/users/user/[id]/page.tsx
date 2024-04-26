"use client"
import Back from "@/components/ui/Back";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import React from "react";
import {FaEnvelope, FaLock, FaLockOpen, FaUser } from "react-icons/fa";

export default function EditUser() {
    
  return (
    <MainWarapper>
        <div className="flex items-center gap-8">
           <Back/>
        <SectionTitle>Edit User</SectionTitle>
        </div>
      <form className="w-[50%] flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <InputWithIcon
            placeholder="user name"
            LeftIcon={FaUser}
            type="text"
            value={"Ujjwal Bhattarai"}
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
          <label htmlFor="name">Change password</label>
          <InputWithIcon
            type="password"
            placeholder="* * * * * * * *"
            LeftIcon={FaLock}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="conformPassword">Confirm Changed Password</label>
          <InputWithIcon
            type="password"
            placeholder="* * * * * * * *"
            LeftIcon={FaLockOpen}
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
            Edit User
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}
