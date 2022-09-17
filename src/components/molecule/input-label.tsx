import React from 'react'
import Input from '../common/input'
import Label from '../common/label'

export default function InputLabel({ label }:any) {
  return (
    <>
      <Label label={label} />
      <Input/>
    </>
  )
}
