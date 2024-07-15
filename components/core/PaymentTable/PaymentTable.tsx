import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import PaymentTableRow from './PaymentTableRow';
import { IPayment } from '@/interfaces/payment.interface';

interface IProps{
  data: IPayment[]
}
export default function PaymentTable({data}: IProps) {
  return (
    <Table className='border-2 border-gray-100'>
    <TableCaption>A list of Payments.</TableCaption>
    <TableHeader>
      <TableRow className="bg-primaryTransparent">
        <TableHead>User</TableHead>
        <TableHead>Payment Id</TableHead>
        <TableHead>Payment Date</TableHead>
        <TableHead>Order Id</TableHead>
        <TableHead>Amount</TableHead>
        <TableHead className="text-center w-[200px]">Details</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        data?.map((item)=> (

          <PaymentTableRow key={item.id} date={item.createdAt} email={item.email} orderId={item.orderId} paymentId={item.paymentId} amount={item.amount}/>
        ))
      }
    </TableBody>
  </Table>
  )
}
