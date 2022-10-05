import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function Container({ children }:any) {
  return (
    <>
      <NavBar/>
      {children}
    </>
  )
}
