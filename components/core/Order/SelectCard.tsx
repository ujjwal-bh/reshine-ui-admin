import React from "react";
import { Card } from "@/components/ui/card";

interface IProps {
  Icon?: React.FC;
  title: string;
  active?: boolean;
  onClick: () => void;
}
export default function SelectCard({
  Icon,
  title,
  active = false,
  onClick,
}: IProps) {
  return (
    <Card
      className={`p-4 flex w-32 min-h-28 flex-col items-center justify-center cursor-pointer ${
        active ? "text-primary border-primary bg-primaryTransparent" : ""
      }`}
      onClick={onClick}
    >
      <div className="text-2xl font-black">
        {Icon &&
        
        <Icon />
        }
      </div>
      <h1 className="break-words text-center">{title}</h1>
    </Card>
  );
}
