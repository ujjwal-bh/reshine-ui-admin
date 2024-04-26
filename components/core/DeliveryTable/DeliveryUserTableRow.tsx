import React from 'react'
import { Button } from '../../ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'

export default function DeliveryUserTableRow() {
  return (
    <TableRow>
    <TableCell className="font-medium">Ujjwal Bhattarai</TableCell>
    <TableCell>bhattaraiujjwal26@gmail.com</TableCell>
    <TableCell>20 March, 2024</TableCell>
    <TableCell className="flex gap-2 justify-center">
      <Button size={"sm"} variant={"outline"} className="border-error text-error w-full">Delete</Button>
      <Link href={"/delivery/user/1234"} className='w-full'>
      <Button size={"sm"} className="w-full">Edit</Button>
      </Link>
    </TableCell>
  </TableRow>
  )
}
