import React, { PropsWithChildren } from 'react'

interface IProps extends PropsWithChildren{}
export default function SectionTitle({children}: IProps) {
  return (
    <h1 className='text-2xl'>{children}</h1>
  )
}
