import React, { PropsWithChildren } from 'react'


interface IProps extends PropsWithChildren{}
export default function MainWarapper({children}: IProps) {
  return (
    <main className="flex flex-col gap-8 pl-[24rem] pt-[6rem] pr-[5rem] pb-4 overflow-x-hidden">
        {children}
    </main>
  )
}
