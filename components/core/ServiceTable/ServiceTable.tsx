import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import ServiceTableRow from './ServiceTableRow';


interface IProps {
  services: any[]
}
export default function ServiceTable({services}: IProps) {
  return (
    <Table className='border-2 border-gray-100'>
    <TableCaption>A list of services.</TableCaption>
    <TableHeader>
      <TableRow className="bg-primaryTransparent">
        <TableHead>Name</TableHead>
        <TableHead className=''>Rate Type</TableHead>
        <TableHead>Rate / Amount</TableHead>
        <TableHead>Description</TableHead>

        
        <TableHead>Active</TableHead>
        <TableHead className="text-center w-[400px]">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {
        services?.map((service)=> (
          <ServiceTableRow key={service.id} id={service.id} rateType={service.rateType} description={service.description} rate={service.rate} active={service.active} name={service.name}/>
        ))
      }
    </TableBody>
  </Table>
  )
}
