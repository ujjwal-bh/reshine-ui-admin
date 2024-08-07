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
        <TableHead className='w-[100px]'>S.N.</TableHead>
        <TableHead>User</TableHead>
        <TableHead>Issue Type</TableHead>
        <TableHead className='max-w-[400px] text-center'>Description</TableHead>
        <TableHead className='text-center'>Issue Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <IssueTableRow/>
    </TableBody>
  </Table>
  )
}
