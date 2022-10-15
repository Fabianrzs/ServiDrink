import React from 'react'
import Icon from '../common/icon'
import '../../styles/NavBar/NavBar.scss'
type NavItemProps = {
  title: string,
  icon: string,
  route: string
}

export default function NavItem(props: NavItemProps) {
  const { title, icon, route } = props
  return (
    <>
      <li className="nav-item pb-1">
        <a className="nav-link active" aria-current="page" href={route}>
          <div className="row justify-content-evenly">
            <div className="col-4">
              {title}
            </div>
            <div className="col-4">
              <Icon icon={icon} size={30} />
            </div>
          </div>
        </a>
      </li>
    </>
  )
}
