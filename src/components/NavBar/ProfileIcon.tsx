import React from 'react'
import Icon from '../common/icon'

export default function ProfileIcon() {
  return (
    <>
      <div className="profile text-center">
        <div className="row">
          <div className="col-12">
            <Icon className="rounded-circle border border-black" icon={ 'favicon' } size={90} color ={'white'} />
          </div>
        </div>
      </div>
    </>
  )
}
