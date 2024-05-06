import React, { PropsWithChildren } from "react";
import { Card, CardTitle } from "./card";
import {  FaTimes } from "react-icons/fa";
import { Button } from "./button";

interface IProps extends PropsWithChildren {
  title: string;
  desc: string;
  Icon: React.FC;
  onClick?: () => void;
  active?: boolean
}

export default function FullCard({
  title,
  desc,
  Icon,
  onClick,
  children,
  active=false
}: IProps) {
  return (
    <Card className="relative border-gray-200 p-4 pt-8 flex flex-col gap-4 items-center w-[20rem] lg:w-full">
      <div className="absolute right-4 top-4 text-xl text-gray-400">
        <FaTimes />
      </div>
      <div className="text-5xl text-primary">
        <Icon />
      </div>
      <CardTitle>{title}</CardTitle>
      <p className="text-gray-400">{desc}</p>
      {
        active?
        <Button className="w-full">Activate</Button>
        :
        <Button variant={"errorOutline"} className="w-full">Deactivate</Button>

      }
      {children}
    </Card>
  );
}
