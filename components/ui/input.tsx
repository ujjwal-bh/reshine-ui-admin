import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface InputWithIconProps extends InputProps {
  LeftIcon?: React.FC;
  RightIcon?: React.FC;
  rightIconClasses?: string;
  rightIconClick?: () => void;
}

export interface InputWithLabelProps extends InputWithIconProps {
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, type, LeftIcon, RightIcon, rightIconClasses, rightIconClick, ...props }, ref) => {
    return (
      <div className="relative">
        {LeftIcon && (
          <div className="absolute top-[50%] translate-y-[-50%] left-2 text-gray-400">
            <LeftIcon />
          </div>
        )}
        <Input type={type} ref={ref} {...props} className={`${className} ${LeftIcon ? "pl-8" : ""}`}/>
        {RightIcon && (
          <div
            className={`absolute top-[50%] translate-y-[-50%] right-4 text-gray-400 ${
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
);

const InputWithLabel = React.forwardRef<HTMLInputElement, InputWithLabelProps>(
  (
    {
      className,
      LeftIcon,
      RightIcon,
      label,
      name,
      type,
      rightIconClasses,
      rightIconClick,
      ...props
    },
    ref
  ) => {
    return (
      <div className="relative">
        <label
          htmlFor={name}
          className="absolute top-1.5 left-12 text-gray-500 font-medium"
        >
          {label}
        </label>
        <div className="absolute top-[62.5%] translate-y-[-50%] left-3 text-primary text-2xl md:text-lg ">
          {LeftIcon && <LeftIcon />}
        </div>
        <Input
          name={name}
          type={type} ref={ref} 
          className="px-12 pt-10 pb-6 text-xl placeholder:text-gray-300 md:text-[1rem]"
          {...props}
        />
        {RightIcon && (
          <div
            className={`absolute top-[50%] translate-y-[-50%] right-6 text-2xl md:text-lg ${
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
);

export { Input, InputWithIcon, InputWithLabel };
