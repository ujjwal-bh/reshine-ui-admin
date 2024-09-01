"use client"
import { useUpdateServiceMutation } from "@/app/_global-redux/services/laundry-service-api";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Button, ButtonWithPopup } from "../../ui/button";


interface IProps{
  id: string,
  active: boolean,
  description: string,
  name: string,
}
export default function WashTypeTableRow({active,name,id, description}: IProps) {

  const [updateService, {isLoading: updateUserLoading, isSuccess: updateWashTypeSuccess, isError: updateWashTypeError}] = useUpdateServiceMutation();
  

  const handleActivateUser = async () => {
    await updateService({id, body: {active: "true"} })
  }
  const handleDeactivateUser = async () => {
    await updateService({id, body: {active: "false"} })
  }

  useEffect(()=> {
    if(updateWashTypeError){
      toast.error("Couldn't deactivate user");
    } if(updateWashTypeSuccess){
      toast.success("Operation successful")
    }
  }, [updateWashTypeError, updateWashTypeSuccess])

  return (
    <TableRow>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{active?(<span className="bg-primaryTransparent text-primary p-2 rounded-md">Active</span>): (<span className="bg-errorTransparent text-error p-2 rounded-md">Inactive</span>)}</TableCell>
      <TableCell className="flex gap-2 justify-center">
        {
          active ? 
        <ButtonWithPopup className="w-full border border-error text-error rounded-md" disabled={updateUserLoading} confirmClick={handleDeactivateUser}>
          Deactivate
        </ButtonWithPopup>
        :
        <ButtonWithPopup className="w-full border border-none rounded-md" disabled={updateUserLoading} confirmClick={handleActivateUser}>
          Activate
        </ButtonWithPopup>

        }
        <Link href={`/services/wash-type/${id}`} className="w-full">
          <Button size={"sm"} className="max-w-[10rem] w-full">
            Edit
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}
