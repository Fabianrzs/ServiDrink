import React from 'react'

interface selectProps {
  id: string
  defaultValue: string
  label: string
  options: {
    id: string,
    value: string | number,
    text: string
  }[]
  onChange: Function
}

export default function Select(props: selectProps) {
  const { id, defaultValue, label, options, onChange } = props
  const optionsHtml = options.map((option, key) => {
    return (
      <option key={key} value={option.text} >{option.text}</option>
    )
  }
  )

  return (<>
    <label htmlFor="select"></label>
    <select className="form-select" id={id} name={id} defaultValue={defaultValue} onChange={(e) => onChange(e)}>
      <option label={label}></option>
      {optionsHtml}
    </select>

  </>

  )
}
