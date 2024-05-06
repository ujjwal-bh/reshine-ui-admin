import React, { MouseEventHandler, PropsWithChildren } from "react";
import { Card } from "./card";
import { FaTimes } from "react-icons/fa";
import Alert from "./Alert";

interface IProps extends PropsWithChildren {
  onClick?: () => void;
}

export default function MiniCard({ onClick, children }: IProps) {
  return (
    <Card className="p-2 min-w-40 flex justify-between items-center bg-primaryTransparent">
      <span>{children}</span>
      <div className="flex justify-between items-center cursor-pointer text-gray-400">
        <Alert>
          <FaTimes />
        </Alert>
      </div>
    </Card>
  );
}
