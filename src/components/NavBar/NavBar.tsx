import React from 'react'
import Icon from '../common/icon'
import NavItem from './NavItem'
import { NavItems } from './ConstansRoutes'
import '../../styles/NavBar/NavBar.scss'

export default function NavBar() {
  return (
    <body className="p-3 m-0 border-0 bd-example">
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Icon className="rounded-5" icon={'favicon'} size={70} color={'white'} />
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">SERVIDRINK</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {
                  NavItems.map((idex, index) => <NavItem key={index} icon={idex.icon} route={idex.route} title={idex.title} />)
                }
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </body>
  )
}
