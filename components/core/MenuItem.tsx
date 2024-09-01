import React, { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLDivElement> {
  Icon: React.FC;
  path?: string;
}

export default function MenuItem({ Icon, children, path, ...rest }: IProps) {
  const pathName = usePathname();
   // Extract pathname and query from the href
   const pathWithoutQuery = pathName?.split('?') || "";
 
   // Check if the current pathname matches
   const isPathnameActive = path === pathWithoutQuery[0];

  if (path) {
    return (
      <Link href={path}>
        <div
          className={`flex gap-4 items-center p-4 pl-[5rem] text-lg hover:bg-primaryTransparent cursor-pointer ${
            isPathnameActive
              ? "bg-primaryTransparent text-primary"
              : ""
          }`}
          {...rest}
        >
          <Icon />
          <span>{children}</span>
        </div>
      </Link>
    );
  } else {
    return (
      <div
        className={`flex gap-4 items-center p-4 pl-[5rem] text-lg hover:bg-primaryTransparent cursor-pointer`}
        {...rest}
      >
        <Icon />
        <span>{children}</span>
      </div>
    );
  }
}
