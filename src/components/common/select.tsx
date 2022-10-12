import React from 'react'

interface selectProps {
  id: string
  defaultValue: string
  label : string
  options: {id:string,
    value:string|number,
    text:string}[]

}

export default function Select(props: selectProps) {
  const { id, defaultValue, label, options } = props
  const optionsHtml = options.map((option, key) => {
    return (
      <option key={key} value={option.value} >{option.text}</option>
    )
  }
  )

  return (<>
    <label htmlFor="select"></label>
    <select className="form-select" id={id} defaultValue={defaultValue}>
      <option label={label}></option>
      {optionsHtml}
    </select>

  </>

  )
}
