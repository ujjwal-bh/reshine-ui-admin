import React, { PropsWithChildren } from 'react'


interface IProps extends PropsWithChildren{}
export default function MainWarapper({children}: IProps) {
  return (
    <main className="pl-[24rem] pt-[6rem] pr-[5rem] pb-4">
        {children}
    </main>
  )
}
