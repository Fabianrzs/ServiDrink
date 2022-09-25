import React from 'react'
import IcoMoon from 'react-icomoon'
const iconSet = require('../../shared/icons/selection.json')

interface IconProps {
    icon: string;
    size?: number;
    color?: string;
}

export default function Icon(props:IconProps) {
  return <IcoMoon {...props} icon={props.icon} iconSet={iconSet} />
}
