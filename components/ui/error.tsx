import React, { PropsWithChildren } from "react";


interface IProps extends PropsWithChildren{
    active?: boolean
}
export default function Error({active= false, children}: IProps) {
  return (
    <div className={`min-w-64 max-w-xl bg-errorTransparent text-error absolute left-[50%] translate-x-[-50%] p-2 rounded-md ${active ? "top-20": "top-[-20rem]"}`}>
        {children}
    </div>
  );
}
