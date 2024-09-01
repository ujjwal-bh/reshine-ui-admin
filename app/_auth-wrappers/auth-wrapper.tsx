"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { ApiError } from "@/interfaces/api-error.interface";
import { redirect, usePathname } from "next/navigation";
import Header from "@/components/core/Header";
import { useGetCurrentUserQuery } from "../_global-redux/services/user-api";
import Loading from "../(auth)/loading";

interface IProps extends PropsWithChildren {}
export default function AuthWrapper({ children }: IProps) {

  const {
    data: currentUserData,
    isError: isCurrentUserError,
    error: currentUserError,
    isLoading: currentUserLoading,
    isFetching: currentUserFetching,
  } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isCurrentUserError) {
      if ((currentUserError as ApiError).status === 401) {
      }
      redirect("/login");
    }
  }, [isCurrentUserError]);


  if (currentUserFetching || currentUserLoading) {
    return <Loading/>
  }
  return (
    <>
        <Header isAuthenticated={true} name={currentUserData?.name}/>
    {children}
    </>
  );
}
