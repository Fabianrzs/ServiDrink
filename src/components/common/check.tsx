import React from 'react'

interface checkProps {
  id: string
  name: string
  defaultValue: string
  label : string
  options: {id:string, value:number|string,text:string}[]


}
export default function Check(props: checkProps) {
  const { id, name, defaultValue,label, options } = props
  const optionsHtml = options.map((option, key) => {
      return (
        <option key={key} value={option.value} >{option.text}</option>
      )
    }
  );
  return (<>
      <label htmlFor="select">titulo:</label>
      <input name={name} id={id}>
        {optionsHtml}
      </input>

    </>

  )
}
