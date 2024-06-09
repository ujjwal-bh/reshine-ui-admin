import React from 'react'
import { Button } from '../../ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'

export default function PaymentTableRow() {
  return (
    <TableRow>
    <TableCell>Ujjwal Bhattarai</TableCell>
    <TableCell>#12334040</TableCell>
    <TableCell>15th May, 2024</TableCell>
    <TableCell>#A1233D</TableCell>
    <TableCell>Rs 234</TableCell>
    <TableCell className="flex gap-2 justify-center">
      <Link href={"/orders/1234"} className='w-full'>
      <Button size={"sm"} className="w-full">View order</Button>
      </Link>
    </TableCell>
  </TableRow>
  )
}
