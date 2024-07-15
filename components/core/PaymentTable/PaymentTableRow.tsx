import React from 'react'
import { Button } from '../../ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import Link from 'next/link'


interface IProps {
  email: string,
  paymentId: string
  date: string,
  amount: number
  orderId: string
}
export default function PaymentTableRow({email, paymentId,date,amount,orderId}: IProps) {
  return (
    <TableRow>
    <TableCell>{email}</TableCell>
    <TableCell>{paymentId}</TableCell>
    <TableCell>{new Date(date).toLocaleDateString()}</TableCell>
    <TableCell>{orderId}</TableCell>
    <TableCell>Rs {amount}</TableCell>
    <TableCell className="flex gap-2 justify-center">
      <Link href={`/orders/${orderId}`} className='w-full'>
      <Button size={"sm"} className="w-full">View order</Button>
      </Link>
    </TableCell>
  </TableRow>
  )
}
