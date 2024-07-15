"use client"
import { useDeleteClothMutation } from "@/app/_global-redux/services/clothes-api";
import { PropsWithChildren, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";
import { Card } from "@/components/ui/card";
import Alert from "@/components/ui/Alert";

interface IProps extends PropsWithChildren {
  id: string
}

export default function ClothesCard({ id, children }: IProps) {

  const [deleteCloth, {isError, isLoading, isSuccess}] = useDeleteClothMutation();
  
  const onClick = async () => {
    await deleteCloth(id);
  }

  useEffect(()=> {
    if(isError){
      toast.error("Something went wrong")
    }
    if(isSuccess){
      toast.success("Cloth deleted successfully")
    }
  },[isError, isSuccess])
  
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
