import React from 'react'

interface ButtonProps {
  color?: string
  text?: string
}

export default function Button(props: ButtonProps) {
  return (
    <button type="button" className="btn btn-primary">{props.text}</button>
  )
}
