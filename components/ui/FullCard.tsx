import React, { PropsWithChildren } from "react";
import { Card, CardTitle } from "./card";
import { FaTimes } from "react-icons/fa";
import { Button } from "./button";
import Alert from "./Alert";

interface IProps extends PropsWithChildren {
  title: string;
  desc: string;
  Icon: React.FC;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  canDelete?: boolean;
  onDelete?: () => void;
}

export default function FullCard({
  title,
  desc,
  Icon,
  onClick,
  children,
  canDelete = false,
  active = false,
  disabled = false,
  onDelete = () => {},
}: IProps) {
  return (
    <Card className="relative border-gray-200 p-4 pt-8 flex flex-col gap-4 items-center w-full lg:w-full">
      <div className="absolute right-4 top-4 text-xl text-gray-400">
        <FaTimes />
      </div>
      <div className="text-5xl text-primary">
        <Icon />
      </div>
      <CardTitle>{title}</CardTitle>
      <p className="text-gray-400">{desc}</p>
      {active ? (
        <Button
          variant={"errorOutline"}
          className="w-full"
          onClick={onClick}
          disabled={disabled}
        >
          Deactivate
        </Button>
      ) : (
        <Button className="w-full" onClick={onClick} disabled={disabled}>
          Activate
        </Button>
      )}
      {canDelete && (
        <div className="w-full">
          <Alert confirmClick={onDelete} className="w-full text-error cursor-pointer">
              Delete
          </Alert>
        </div>
      )}
      {children}
    </Card>
  );
}
