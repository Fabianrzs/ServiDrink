import React, { useState } from 'react'
import InputLabel from '../../components/molecule/input-label'

export default function Home() {
  const [numeros, setNumeros] = useState(0)
  const textButton = 'oprimir'
  return (
    <>
      <h1>My first Component</h1>
      <InputLabel label="Nombre" />
      <br />
      <InputLabel label="Apellido" />
      <br />
      <InputLabel label="Edad" />
      <div>
        hola mis numeros son: {numeros}
      </div>
      <button onClick={() => {
        setNumeros(numeros + 1)
        console.log(numeros)
      }}>{textButton}</button>
    </>
  )
}
