"use client"
import React from 'react'
import { Card } from '../ui/card'
import { IOrderDetail } from '@/lib/utils'
import { useRouter } from 'next/navigation'


interface IProps {
    item: IOrderDetail,
    className?: string,
}

export default function OrderCard({item, className}: IProps) {
    const {push} = useRouter();
    const {amount,clothesCount, date, location, orderId, orderStatus, paymentStatus, user, washType} = item;

    const handleClick = () => {
        push(`/orders/${orderId}`)
    }
  return (
    <Card className={`p-4 min-w-[25rem] cursor-pointer ${className ? className: ""}`} onClick={handleClick}>
        <div className='flex justify-between'>
            <span className='text-gray-400 text-sm'>Order ID: #{orderId}</span>
            <span className="text-gray-400 text-sm">{date}</span>
        </div>
        <h1 className='font-semibold text-lg'>{washType}</h1>
        <h2>Ujjwal Bhattarai</h2>
        <span className="text-gray-400 text-sm break-words">{location}</span>
        <h3 className="text-gray-400 my-4">{clothesCount} Clothes</h3>

        <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center">
                <h1 className='text-xl font-black'> $ {amount} </h1>
                <span className={`text-sm text-center ${paymentStatus === "Paid" ? "text-primary" : "text-error"}`}> {paymentStatus}</span>
            </div>
            <div className={`p-2 rounded-sm ${orderStatus === "Cancelled" ? "bg-errorTransparent text-error" : "bg-primaryTransparent text-primary"}`}>{orderStatus}</div>
        </div>
    </Card>
  )
}
