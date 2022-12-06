import React from 'react'
import '../../styles/Login/Login.scss'

export default function Login() {
  return (
    <div className="container">
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="col-xxl-7 col-md-12 border border-dark p-5 pt-3">
          <header className="text-center mb-4"><span>SERVIDRINK</span></header>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required/>
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="text-center">
            <a href="/home"><button type="button" className="btn btn-outline-dark">LOGIN</button></a>
          </div>
        </div>
      </div>
    </div>
  )
}
