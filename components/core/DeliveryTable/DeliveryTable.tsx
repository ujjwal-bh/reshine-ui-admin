import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import DeliveryUserTableRow from './DeliveryUserTableRow';

export default function DeliveryTable() {
  return (
    <Table className='border-2 border-gray-100'>
    <TableCaption>A list of delivery persons.</TableCaption>
    <TableHeader>
      <TableRow className="bg-primaryTransparent">
        <TableHead>Name</TableHead>
        <TableHead>Email Id</TableHead>
        <TableHead>Created At</TableHead>
        <TableHead className="text-center w-[400px]">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <DeliveryUserTableRow />
      <DeliveryUserTableRow />
    </TableBody>
  </Table>
  )
}
