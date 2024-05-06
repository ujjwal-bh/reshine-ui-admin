import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaFilter } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Filter() {
  return (
    <>
      {/* <DropdownMenu>
    <DropdownMenuTrigger className='bg-primaryTransparent px-4 min-h-10 min-w-[8rem] flex  gap-4 justify-center items-center text-primary rounded-md'> <span className='text-xl'><FaFilter/></span><span>Filter</span></DropdownMenuTrigger>
    <DropdownMenuContent className='min-w-[10rem] bg-background'>
      <DropdownMenuLabel>Choose filters</DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuItem className='hover:bg-primaryTransparent hover:text-primary'>Billing</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu> */}
      <Dialog>
        <DialogTrigger className="bg-primaryTransparent px-4 min-h-10 min-w-[8rem] flex  gap-4 justify-center items-center text-primary rounded-md">
          <span className="text-xl">
            <FaFilter />
          </span>
          <span>Filter</span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose filters</DialogTitle>
            <DialogDescription>
              pachi halxu
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
