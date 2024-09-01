"use client"
import { useUpdateServiceTypeMutation } from "@/app/_global-redux/services/service-type-api";
import { TableCell, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Button, ButtonWithPopup } from "../../ui/button";


interface IProps{
  id: string,
  active: boolean,
  rate: number,
  name: string,
  rateType: string,
  description: string
}
export default function ServiceTableRow({active,name,id, rate, rateType, description}: IProps) {

  const [updateServiceType, {isLoading: updateServiceTypeLoading, isSuccess: updateServiceTypeSuccess, isError: updateServiceTypeError}] = useUpdateServiceTypeMutation();
  

  const handleActivateServiceType = async () => {
    await updateServiceType({id, body: {active: "true"} })
  }
  const handleDeactivateServiceType = async () => {
    await updateServiceType({id, body: {active: "false"} })
  }

  useEffect(()=> {
    if(updateServiceTypeError){
      toast.error("Couldn't deactivate user");
    } if(updateServiceTypeSuccess){
      toast.success("Operation successful")
    }
  }, [updateServiceTypeError, updateServiceTypeSuccess])

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell className="font-medium">
        
          {rateType}
      </TableCell> 
      <TableCell className="font-medium">{rateType === "fixed" && "Rs"} {rate} {rateType === "percentage" && "%"}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{active?(<span className="bg-primaryTransparent text-primary p-2 rounded-md">Active</span>): (<span className="bg-errorTransparent text-error p-2 rounded-md">Inactive</span>)}</TableCell>
      <TableCell className="flex gap-2 justify-center">
        {
          active ? 
        <ButtonWithPopup className="w-full border border-error text-error rounded-md" disabled={updateServiceTypeLoading} confirmClick={handleDeactivateServiceType}>
          Deactivate
        </ButtonWithPopup>
        :
        <ButtonWithPopup className="w-full border border-none rounded-md" disabled={updateServiceTypeLoading} confirmClick={handleActivateServiceType}>
          Activate
        </ButtonWithPopup>

        }
        <Link href={`/services/service-type/${id}`} className="w-full">
          <Button size={"sm"} className="max-w-[10rem] w-full">
            Edit
          </Button>
        </Link>
      </TableCell>
    </TableRow>
  );
}
