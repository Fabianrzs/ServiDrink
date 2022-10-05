import React from 'react'
import NavBar from '../NavBar/NavBar'

export default function Container({ children }:any) {
  return (
    <>
      <NavBar/>
      <div className="row">
        <div className="col-3"></div>
        <div className="col">
          <div className="d-flex vh-100 justify-content-center align-items-center">
            {children}
          </div>
        </div>
      </div>

    </>
  )
}
