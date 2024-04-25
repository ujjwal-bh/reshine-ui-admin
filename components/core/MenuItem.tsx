import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { PropsWithChildren } from "react";

interface IProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  Icon: React.FC;
  path?: string;
}

export default function MenuItem({ Icon, children, path, ...rest }: IProps) {
  const pathName = usePathname();

  if (path) {
    return (
      <Link href={path}>
        <div
          className={`flex gap-4 items-center p-4 pl-[5rem] text-lg font-medium text-primary hover:bg-primaryTransparent cursor-pointer ${
            pathName === path ? "bg-primaryTransparent" : ""
          }`}
          {...rest}
        >
          <Icon/>
          <span>{children}</span>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={`flex gap-4 items-center p-4 pl-[5rem] text-lg font-medium text-primary hover:bg-primaryTransparent cursor-pointer`}
        {...rest}
      >
        <Icon />
        <span>{children}</span>
      </div>
    );
  }
}
