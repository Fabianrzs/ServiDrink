import React from 'react'
import Icon from '../common/icon'
import '../../styles/components/NavBar/NavBar.scss'

type NavItemProps={
    title: string,
    icon: string,
    route: string
}

export default function NavItem(props: NavItemProps) {
  const { title, icon } = props
  return (
    <ul className="w-100 p-0 m-0">
      <li>
        <a>
          <div className="row">
            <div className="col-4">
              <Icon icon={icon} size={20} />
            </div>
            <div className="col-4">
              <span >{title}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  )
}
