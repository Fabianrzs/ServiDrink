import React from 'react'
import '../../styles/components/NavBar/NavBar.scss'
import ProfileIcon from './ProfileIcon'
import NavItem from './NavItem'
import { NavItems } from './ConstansRoutes'

export default function NavBar() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <ProfileIcon />
          {
            NavItems.map((idex, index) => <NavItem key={index} icon={idex.icon}
              route={idex.route} title={idex.title} />)
          }
        </div>
      </div>
    </>
  )
}
