"use client"
import SelectWithSearch from '@/components/ui/SelectWithSearch'
import { Button } from '@/components/ui/button'
import { InputWithIcon } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { FaMoneyBill } from 'react-icons/fa'

export default function AddServiceType() {
  return (
    <div className='w-full flex flex-col gap-4'>
      <SelectWithSearch />
    <InputWithIcon LeftIcon={FaMoneyBill} placeholder='Service name'/>
    <Textarea placeholder='Enter the description'/>
    <Button className='w-full'>Add service type</Button>
    </div>
  )
}
