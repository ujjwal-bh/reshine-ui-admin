"use client"
import SelectWithSearch from '@/components/ui/SelectWithSearch'
import { Button } from '@/components/ui/button'
import { InputWithIcon } from '@/components/ui/input'
import Select from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { FaMoneyBill } from 'react-icons/fa'

export default function AddWashType() {
  return (
    <div className='w-full flex flex-col gap-4'>
      <Select options={[]} placeholder='select Icon'/>
    <InputWithIcon LeftIcon={FaMoneyBill} placeholder='Wash type name'/>
    <Textarea placeholder='Enter the description'/>
    <Button className='w-full'>Add wash type</Button>
    </div>
  )
}
