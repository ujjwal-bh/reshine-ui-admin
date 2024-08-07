"use client"
import { useDeleteClothMutation } from "@/app/_global-redux/services/clothes-api";
import { PropsWithChildren, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Alert from "./Alert";
import { Card } from "./card";
import toast from "react-hot-toast";

interface IProps extends PropsWithChildren {
  id?: string
}

export default function MiniCard({ id, children }: IProps) {
  const onClick = async () => {
  }
  
  return (
    <Card className="p-2 min-w-40 flex justify-between items-center bg-primaryTransparent">
      <span>{children}</span>
      <div className="flex justify-between items-center cursor-pointer text-gray-400">
        <Alert confirmClick={onClick}>
          <FaTimes />
        </Alert>
      </div>
    </Card>
  );
}
