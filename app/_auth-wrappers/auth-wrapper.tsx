"use client";
import React, { PropsWithChildren, useEffect } from "react";
import { ApiError } from "@/interfaces/api-error.interface";
import { redirect, usePathname } from "next/navigation";
import Header from "@/components/core/Header";
import { useGetCurrentUserQuery } from "../global-redux/services/user-api";

interface IProps extends PropsWithChildren {}
export default function AuthWrapper({ children }: IProps) {
  const pathname = usePathname();

  const {
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
    return <div>Loading</div>;
  }
  return children;
}
