import React from 'react'
import Icon from '../common/icon'
import '../../styles/components/NavBar/NavBar.scss'

export default function NavItem() {
  return (
    <ul className="w-100 text-center p-0 m-0">
      <li>
        <a>
          {
            <>
              <Icon icon={''} />
              <span>Admin</span>
            </>
          }
        </a>
      </li>
    </ul>
  )
}
