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


interface IProps {
  users: any[]
}
export default function UserTable({users}: IProps) {
  return (
    <Table className='border-2 border-gray-100'>
    <TableCaption>A list of users.</TableCaption>
    <TableHeader>
      <TableRow className="bg-primaryTransparent">
        <TableHead className=''>Role</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Email Id</TableHead>
        <TableHead>Phone Number</TableHead>
        <TableHead>Active</TableHead>
        <TableHead className="text-center w-[400px]">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        users?.map((user)=> (
          <UserTableRow key={user.id} email={user.email} phone={user.phone} id={user.id} active={user.active} role={user.role} name={user.name} />
          
        ))
      }
    </TableBody>
  </Table>
  )
}
