"use client"
import React, { SyntheticEvent, useEffect, useState } from "react";

import {
  useGetUserQuery,
  useUpdateUserMutation,
} from "@/app/_global-redux/services/user-api";

import { userType } from "@/lib/constants";

import toast from "react-hot-toast";
import Back from "@/components/ui/Back";
import Loader from "@/components/ui/loader";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import SectionTitle from "@/components/ui/sectionTitle";
import MainWarapper from "@/components/ui/mainWarapper";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FaEnvelope, FaLock, FaLockOpen, FaUser } from "react-icons/fa";

const INIT = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: ""
};

interface IFormData {
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  role?: string;
}

export default function EditUserPage({ params }: { params: { id: string } }) {
  const [formData, setFormData] = useState<IFormData>(INIT);
  const {
    data: userData,
    isLoading: userDataLoading,
    isFetching: userDataFetching,
    isSuccess: userDataSuccess,
  } = useGetUserQuery(params.id);

  const [
    updateUser,
    {
      isError: updateUserError,
      isLoading: updateUserLoading,
      isSuccess: updateUserSuccess,
    },
  ] = useUpdateUserMutation();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Please enter a valid password");
      return;
    }

    const { confirmPassword, ...rest } = formData;
    if (formData.password?.length === 0) delete rest.password;
    await updateUser({ id: params.id, body: rest });
  };

  useEffect(() => {
    if (userDataSuccess) {
      console.log(userData, "data ")
      setFormData({
        ...INIT,
        email: userData.email || "",
        name: userData.name || "",
        role: userData.role || "user",
      });
    }
  }, [userDataSuccess, userData]);

  useEffect(() => {
    if (updateUserError) toast.error("Something went wrong");
    if (updateUserSuccess) toast.success("User updated successfully");
  }, [updateUserError, updateUserSuccess]);

  if (userDataFetching || userDataLoading) return <Loader />;

  return (
    <MainWarapper>
      <div className="flex items-center gap-8">
        <Back />
        <SectionTitle>Edit User</SectionTitle>
      </div>
      <form className="w-[50%] flex flex-col gap-4 lg:w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <InputWithIcon
            placeholder="Full name"
            LeftIcon={FaUser}
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email Address</label>
          <InputWithIcon
            placeholder="someone@gmail.com"
            LeftIcon={FaEnvelope}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Change password</label>
          <InputWithIcon
            type="password"
            placeholder="leave empty if you don't want to change"
            LeftIcon={FaLock}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="conformPassword">Confirm Changed Password</label>
          <InputWithIcon
            type="password"
            placeholder="leave empty if you don't want to change"
            LeftIcon={FaLockOpen}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
        </div>
        <div className="flex my-2 gap-4 items-center">
          <RadioGroup value={formData.role} onValueChange={(e) => setFormData({ ...formData, role: e })}>
            {userType.map((type) => (
              <div className="flex items-center space-x-2" key={type}>
                <RadioGroupItem value={type} id={type} />
                <Label htmlFor={type}>{type}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div>
          <Button
            className="w-48"
            type="submit"
            onClick={handleSubmit}
            disabled={updateUserLoading}
          >
            {updateUserLoading ? "Loading" : "Edit User"}
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}
