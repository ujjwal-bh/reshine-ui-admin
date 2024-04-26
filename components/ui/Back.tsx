"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default function Back() {
    const {back} = useRouter()
  return (
    <div className="cursor-pointer" onClick={()=> back() }><FaArrowLeft/></div>
  )
}
