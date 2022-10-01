import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function Container({ children }:any) {
  return (
    <>
      <NavBar/>
      <div className="d-flex vh-100 justify-content-center align-items-start m-5">
        {children}
      </div>
    </>
  )
}
