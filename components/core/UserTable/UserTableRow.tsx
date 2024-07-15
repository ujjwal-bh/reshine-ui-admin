"use client"
import { useDeactivateUserMutation } from "@/app/_global-redux/services/user-api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Button, ButtonWithPopup } from "../../ui/button";


interface IProps{
  id: string,
  active: boolean
  role: string
  phone: string
  email: string
  name?: string
}
export default function UserTableRow({active,name,email,id, phone,role}: IProps) {

  const [deactivateUser, {isLoading: deactivateUserLoading, isSuccess: deactivateUserSuccess, isError: deactivateUserError}] = useDeactivateUserMutation()
  
  const handleDeactivateUser = async () => {
    await deactivateUser(id);
  }

  useEffect(()=> {
    if(deactivateUserError){
      toast.error("Couldn't deactivate user");
    } if(deactivateUserSuccess){
      toast.success("Operation successful")
    }
  }, [deactivateUserError, deactivateUserSuccess])

  return (
    <TableRow>
      <TableCell className="font-medium">
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>{role}</AvatarFallback>
        </Avatar>
      </TableCell>
      <TableCell className="font-medium">{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
      <TableCell>{active?(<span className="bg-primaryTransparent text-primary p-2 rounded-md">Active</span>): (<span>Inactive</span>)}</TableCell>
      <TableCell className="flex gap-2 justify-center">
        <ButtonWithPopup className="w-full border border-error text-error rounded-md" disabled={deactivateUserLoading} confirmClick={handleDeactivateUser}>
          Deactivate
        </ButtonWithPopup>
        <Link href={`/users/user/${id}`} className="w-full">
          <Button size={"sm"} className="max-w-[10rem] w-full">
            Edit
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}
