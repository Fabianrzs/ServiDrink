import React from 'react'
import Button from '../../components/common/button'
import Input from '../../components/common/input'

export default function Login() {
  return (
    <div className="container bg-red w-100">
      <Input type={'text'} id={'userName'} name={'userName'} defaultValue={'Kevin'} />
      <Input type={'number'} id={'numero'} name={'numeros'} defaultValue={'10'} />
      <Input type={'email'} id={'email'} name={'email'} defaultValue={'@this'} />
      <Input type={'password'} id={'pass'} name={'pass'} defaultValue={'pass'} />
      <Button />
    </div>
  )
}
