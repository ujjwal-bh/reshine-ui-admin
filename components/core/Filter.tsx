import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { FaFilter } from 'react-icons/fa';
export default function Filter() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger className='bg-primaryTransparent px-4 w-full min-w-[8rem] flex  gap-4 justify-center items-center text-primary rounded-md'> <span className='text-xl'><FaFilter/></span><span>Filter</span></DropdownMenuTrigger>
    <DropdownMenuContent className='min-w-[10rem] bg-background'>
      <DropdownMenuLabel>Choose filters</DropdownMenuLabel>
      <DropdownMenuSeparator />

      {/* {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
      <DropdownMenuItem className='hover:bg-primaryTransparent hover:text-primary'>Billing</DropdownMenuItem>
      {/* <DropdownMenuItem>Team</DropdownMenuItem> */}
      {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
    </DropdownMenuContent>
  </DropdownMenu>

  )
}
