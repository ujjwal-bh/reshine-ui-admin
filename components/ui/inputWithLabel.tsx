import React from "react";
import { Input } from "./input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
  label: string;
  rightIconClasses?: string;
  rightIconClick?: () => void;
}

export default function InputWithLabel({
  LeftIcon,
  RightIcon,
  label,
  name,
  placeholder,
  type,
  rightIconClasses,
  rightIconClick,
  ...rest
}: InputProps) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="absolute top-1.5 left-12 text-md text-gray-500 font-medium"
      >
        {label}
      </label>
      <div className="absolute top-[62.5%] translate-y-[-50%] left-3 text-primary text-2xl ">
        {LeftIcon && <LeftIcon />}
      </div>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        className="px-12 pt-10 pb-6 text-xl placeholder:text-gray-300 placeholder:font-medium"
        {...rest}
      />
      {RightIcon && (
        <div
          className={`absolute top-[50%] translate-y-[-50%] right-6 text-2xl ${
            rightIconClasses ? rightIconClasses : ""
          } `}
          onClick={rightIconClick}
        >
          <RightIcon />
        </div>
      )}
    </div>
  );
}
