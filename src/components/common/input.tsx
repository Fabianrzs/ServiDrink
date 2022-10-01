import React from 'react'

interface InputProps {
  type: string
  id: string
  name: string
  defaultValue: string
  label : string


}

export default function Input(props: InputProps) {
  const { type, id, name, defaultValue } = props
  return (
    <input type={type} id={id} name={name} defaultValue={defaultValue} />
  )
}
