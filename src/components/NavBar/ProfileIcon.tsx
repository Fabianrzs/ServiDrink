import React from 'react'
import '../../styles/components/NavBar/NavBar.scss'
import Icon from '../common/icon'

export default function ProfileIcon() {
  return (
    <>
      <div className="profile">
        <Icon icon={ 'favicon' } size={100} color ={'white'} />
        <h3>ServiDrink</h3>
        <p></p>
      </div>
    </>
  )
}
