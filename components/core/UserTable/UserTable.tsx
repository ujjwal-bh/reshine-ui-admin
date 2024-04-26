import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import UserTableRow from './UserTableRow';

export default function UserTable() {
  return (
    <Table className='border-2 border-gray-100'>
    <TableCaption>A list of users.</TableCaption>
    <TableHeader>
      <TableRow className="bg-primaryTransparent">
        <TableHead className='w-[100px]'></TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email Id</TableHead>
        <TableHead>Phone Number</TableHead>
        <TableHead>Gender</TableHead>
        <TableHead className="text-center w-[400px]">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <UserTableRow/>
      <UserTableRow/>
    </TableBody>
  </Table>
  )
}
