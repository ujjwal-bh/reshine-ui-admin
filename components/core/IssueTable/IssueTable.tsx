import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import IssueTableRow from './IssueTableRow';

export default function IssueTable() {
  return (
    <Table className='border-2 border-gray-100'>
    <TableCaption>A list of Issues.</TableCaption>
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
      <IssueTableRow/>
    </TableBody>
  </Table>
  )
}
