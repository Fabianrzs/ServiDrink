import React from 'react'

interface selectProps {
  id: string
  name: string
  defaultValue: string
  label : string
  options: {id:string,
    value:string|number,
    text:string}[]

}

export default function Select(props: selectProps) {
  const { id, name, options } = props
  const optionsHtml = options.map((option, key) => {
    return (
      <option key={key} value={option.value} >{option.text}</option>
    )
  }
  )

  return (<>
    <label htmlFor="select">{name}</label>
    <select name={name} id={id}>
      <option value="">--SELECT OPTION--</option>
      {optionsHtml}
    </select>

  </>

  )
}
