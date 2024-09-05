"use client";
import { useEffect } from 'react';
import { redirect, usePathname } from 'next/navigation';

import Header from "@/components/core/Header";
import Loader from "@/components/ui/loader";

import { ApiError } from "@/interfaces/api-error.interface";
import { useGetCurrentUserQuery } from "../_global-redux/services/user-api";

interface IProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: IProps) {
  const {
    data: currentUserData,
    isError: isCurrentUserError,
    error: currentUserError,
    isLoading: currentUserLoading,
    isFetching: currentUserFetching,
    isSuccess: currentUserSuccess
  } = useGetCurrentUserQuery();

  useEffect(() => {
    if (isCurrentUserError && currentUserError) {
      const error = currentUserError as ApiError;
      if (error.status === 401) {
        console.log(localStorage.getItem("RESHINE_ACCESS_TOKEN"), "Access token");
        redirect("/login"); 
      }
    }

  }, [isCurrentUserError, currentUserError, currentUserSuccess]);

  if (currentUserFetching || currentUserLoading) {
    return <Loader />;
  }

  if (isCurrentUserError && !((currentUserError as ApiError).status === 401)) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      <Header isAuthenticated={!!currentUserData} name={currentUserData?.name} />
      {children}
    </>
  );
}
