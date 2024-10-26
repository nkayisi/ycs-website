'use client'


import { NextUIProvider } from '@nextui-org/react'
import React from 'react'

function MainProvider({
    children
} : {
    children: React.ReactNode
}) {
  return (
    <NextUIProvider> 
    {children}
    </NextUIProvider> 
  )
}

export default MainProvider