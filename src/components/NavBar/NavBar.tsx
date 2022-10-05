import React from 'react'
import Icon from '../common/icon'

export default function NavBar() {
  return (
    <>
      <nav style={{ background: 'rgb(5, 68, 104)' }} className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand text-white" href="/home"><Icon icon={'home'} size={40} /></a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item gy-5">
                <a className="nav-link active text-white" aria-current="page" href="/registro"><Icon icon={'file-text2'} size={40} /></a>
              </li>
              <li className="nav-item me-auto mb-2 mb-lg-0">
                <a className="nav-link active text-white" aria-current="page" href="/inventario"><Icon icon={'stats-dots'} size={40} /></a>
              </li>
              <li className="nav-item me-auto mb-2 mb-lg-0">
                <a className="nav-link active text-white" aria-current="page" href="/pedidos"><Icon icon={'truck'} size={40} /></a>
              </li>
              <li className="nav-item me-auto mb-2 mb-lg-0">
                <a className="nav-link active text-white" aria-current="page" href="/usuarios"><Icon icon={'users'} size={40} /></a>
              </li>
            </ul>
            <form className="d-flex">
              <div className="me-2">
                <Icon className="rounded-5" icon={'favicon'} size={70} color={'white'} />
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
