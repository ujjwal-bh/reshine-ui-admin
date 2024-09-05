"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useCreateUserMutation } from "@/app/_global-redux/services/user-api";

import toast from "react-hot-toast";
import Back from "@/components/ui/Back";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { ApiError } from "@/interfaces/api-error.interface";
import { FaEnvelope, FaEyeSlash, FaLock, FaPhoneAlt, FaUser } from "react-icons/fa";

const INIT = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  // active: false,
  phone: "",
  role: "user"
};
export default function AddUserPage() {
  const [formData, setFormData] = useState(INIT);
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const router = useRouter()
  
  const [createUser, { isLoading, isError, isSuccess, error }] = useCreateUserMutation();
 
  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const { confirmPassword, ...rest } = formData;
    await createUser(rest);
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as ApiError).data.message);
    }
    if (isSuccess) {
      toast.success("Operation Successful");
    }
  }, [isError, isSuccess, error]);

  // const handleCheckboxChange = (checked: boolean) => {
  //   setFormData({ ...formData, active: checked });
  // };

  useEffect(()=> {
      if(isSuccess){
        router.push("/users")
      }
  }, [isSuccess, router])

  return (
    <MainWarapper>
     <div className="flex items-center gap-8">
           <Back/>
        <SectionTitle>Add User</SectionTitle>
        </div>
        <form className="w-[50%] flex flex-col gap-4 lg:w-full" onSubmit={handleCreateUser}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <InputWithIcon
            placeholder="User's name"
            LeftIcon={FaUser}
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <InputWithIcon
            type="email"
            autoComplete="email"
            placeholder="someone@gmail.com"
            LeftIcon={FaEnvelope}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone</label>
          <InputWithIcon
            type="string"
            autoComplete="phone"
            placeholder="phone number"
            LeftIcon={FaPhoneAlt}
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <InputWithIcon
            type={showPass ? "text" : "password"}
            autoComplete="new-password"
            placeholder="* * * * * * * *"
            LeftIcon={FaLock}
            RightIcon={FaEyeSlash}
            rightIconClasses={showPass ? "text-primary" : "text-gray-400"}
            rightIconClick={() => setShowPass(prev => !prev)}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <InputWithIcon
            type={showConfirmPass ? "text" : "password"}
            autoComplete="new-password"
            placeholder="* * * * * * * *"
            LeftIcon={FaLock}
            RightIcon={FaEyeSlash}
            rightIconClasses={showConfirmPass ? "text-primary" : "text-gray-400"}
            rightIconClick={() => setShowConfirmPass(prev => !prev)}
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />
        </div>
        {/* <div className="flex my-2 gap-4 items-center">
          <label htmlFor="active">Make the user active</label>
          <Checkbox checked={formData.active} onCheckedChange={handleCheckboxChange} />
        </div> */}
        <div>
          <Button className="w-48" type="submit" disabled={isLoading} onClick={handleCreateUser}>
            {isLoading ? "Adding..." : "Add User"}
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}
