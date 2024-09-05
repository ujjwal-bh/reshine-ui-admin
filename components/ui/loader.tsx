"use client";
import React from "react";
import { Bars } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div>
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
    </div>
  );
}
