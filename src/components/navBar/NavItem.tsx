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
    <ul className="w-100 text-center p-0 m-0">
      <li>
        <a>
          <Icon icon={icon} size={20} />
          <span >{title}</span>
        </a>
      </li>
    </ul>
  )
}
