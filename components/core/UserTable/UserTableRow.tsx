import React from 'react'
import { Button, ButtonWithPopup } from '../../ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
export default function UserTableRow() {
  return (
    <TableRow>
    <TableCell className="font-medium">
    <Avatar>
  <AvatarImage src="kera" />
  <AvatarFallback>UB</AvatarFallback>
</Avatar>

    </TableCell>
    <TableCell className="font-medium">Ujjwal Bhattarai</TableCell>
    <TableCell>bhattaraiujjwal26@gmail.com</TableCell>
    <TableCell>8105822779</TableCell>
    <TableCell>Male</TableCell>
    <TableCell className="flex gap-2 justify-center">
    <ButtonWithPopup className="w-full border border-error text-error rounded-md">Delete</ButtonWithPopup>
      <Link href={"/users/user/1234"} className='w-full'>
      <Button size={"sm"} className="w-full">Edit</Button>
      </Link>
    </TableCell>
  </TableRow>
  )
}
