"use client"
import React, { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'


interface IProps extends PropsWithChildren{}
export default function Providers({children}: IProps) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
