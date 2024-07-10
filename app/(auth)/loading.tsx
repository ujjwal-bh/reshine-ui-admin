"use client"
import React from "react";
import MainWarapper from "@/components/ui/mainWarapper";
import { Bars } from "react-loader-spinner";

export default function Loading() {
  return (
    <MainWarapper>
      <div className="h-[80vh] flex items-center justify-center w-full">
        <Bars
          height="80"
          width="80"
          color="#008c9e"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass="text-primary"
          visible={true}
        />
      </div>
    </MainWarapper>
  );
}
