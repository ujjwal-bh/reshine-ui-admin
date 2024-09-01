"use client"
import { useDeactivateUserMutation, useUpdateUserMutation } from "@/app/_global-redux/services/user-api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Button, ButtonWithPopup } from "../../ui/button";
import { useRouter } from "next/navigation";


interface IProps{
  id: string,
  active: boolean
  role: string
  phone: string
  email: string
  name?: string
}
export default function UserTableRow({active,name,email,id, phone,role}: IProps) {

  const [updateUser, {isLoading: updateUserLoading, isSuccess: updateUserSuccess, isError: updateUserError}] = useUpdateUserMutation();
  

  const handleActivateUser = async () => {
    await updateUser({id, body: {active: "true"} })
  }
  const handleDeactivateUser = async () => {
    await updateUser({id, body: {active: "false"} })
  }

  useEffect(()=> {
    if(updateUserError){
      toast.error("Couldn't deactivate user");
    } if(updateUserSuccess){
      toast.success("Operation successful")
    }
  }, [updateUserError, updateUserSuccess])

  return (
    <TableRow>
      <TableCell className="font-medium">
        
          {role}
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
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
        <Link href={`/users/user/${id}`} className="w-full">
          <Button size={"sm"} className="max-w-[10rem] w-full">
            Edit
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}
