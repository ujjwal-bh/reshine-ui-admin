import React from 'react'
import { Button, ButtonWithPopup } from '../../ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { IAddress } from '@/interfaces/address.interface'
import { cn } from '@/lib/utils'
import { useDeleteAddressMutation, useToggleAddressActiveMutation, useUpdateAddressMutation } from '@/app/_global-redux/services/address-api'


interface IProps {
    address: IAddress
}
export default function AddressTableRow({address}: IProps) {

    const [toggleAddressActive] = useToggleAddressActiveMutation()
    const [deleteAddress] = useDeleteAddressMutation()

    const handleToggleAddressActive = async() => {
        await toggleAddressActive(address.id)
    }

    const handleDeleteAddress = async () => {
        await deleteAddress(address.id)
    }

  return (
    <TableRow>
    <TableCell>{address.landmark}</TableCell>
    <TableCell className="font-medium">{address.address}</TableCell>
    <TableCell>{address.city}</TableCell>
    <TableCell>{address.state}</TableCell>
    <TableCell>{address.pincode}</TableCell>
    <TableCell>{address.deliveryCharge}</TableCell>

    <TableCell><span className={cn("py-2 px-4 text-center rounded-md cursor-pointer", {"text-primary bg-primaryTransparent": address.active ,"text-error bg-errorTransparent": !address.active})} onClick={handleToggleAddressActive}>{address.active ? "Active": "Inactive"}</span></TableCell>

    
    <TableCell className="flex gap-2 justify-center">
      <ButtonWithPopup className="w-full border border-error text-error rounded-md" confirmClick={handleDeleteAddress}>Delete</ButtonWithPopup>
      <Link href={`/addresses/address/${address.id}`} className='w-full'>
      <Button size={"sm"} className="w-full">Edit</Button>
      </Link>
    </TableCell>
  </TableRow>
  )
}
