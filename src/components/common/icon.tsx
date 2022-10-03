import React from 'react'
import IcoMoon from 'react-icomoon'
const iconSet = require('../../shared/icons/selection.json')

export default function Icon(props:any) {
  return <IcoMoon {...props} icon={props.icon} iconSet={iconSet} />
}
