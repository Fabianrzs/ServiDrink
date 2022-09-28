import React from 'react'
import '../../styles/components/NavBar/NavBar.scss'
import NavItem from './NavItem'
import ProfileIcon from './ProfileIcon'

export default function NavBar() {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <ProfileIcon />
          <NavItem />
        </div>
      </div>
    </>
  )
}
