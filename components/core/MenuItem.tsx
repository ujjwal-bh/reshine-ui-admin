import React, { PropsWithChildren } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface IProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  Icon: React.FC;
  path?: string;
  exactPath?: boolean; // Add this if you want exact path match (e.g., for non-nested routes like "/addresses")
  queryParams?: { [key: string]: string }; // Expected query params
}

export default function MenuItem({ Icon, children, path, exactPath = false, queryParams, ...rest }: IProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract the current pathname
  const pathWithoutQuery = pathname || "";

  // Check if the base path matches the provided path
  const isPathnameActive = exactPath ? pathWithoutQuery === path : pathWithoutQuery.startsWith(path || "");

  // Function to compare query parameters
  const areQueryParamsMatching = () => {
    if (!queryParams) return true; // If no query params passed, ignore comparison

    // Compare each key-value pair in the provided queryParams
    return Object.keys(queryParams).every((key) => searchParams.get(key) === queryParams[key]);
  };

  // Determine if the item should be active based on both pathname and query parameters
  const isActive = isPathnameActive && areQueryParamsMatching();

  return path ? (
    <Link href={path}>
      <div
        className={`flex gap-4 items-center p-4 pl-[5rem] text-lg hover:bg-primaryTransparent cursor-pointer ${
          isActive ? "bg-primaryTransparent text-primary" : ""
        }`}
        {...rest}
      >
        <Icon />
        <span>{children}</span>
      </div>
    </Link>
  ) : (
    <div className="flex gap-4 items-center p-4 pl-[5rem] text-lg hover:bg-primaryTransparent cursor-pointer" {...rest}>
      <Icon />
      <span>{children}</span>
    </div>
  );
}
