import React from 'react'


interface IProps {
    data: number,
    title: string
}
export default function DataCard({data, title}: IProps) {
  return (
   <div className='w-full min-h-12 bg-primaryTransparent p-8 rounded-md'>
        <h1 className='text-primary text-4xl font-bold text-center'>{data}</h1>
        <h3 className='text-center w-full mt-2'>{title}</h3>
   </div>
  )
}
