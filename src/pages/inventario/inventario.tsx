import React from 'react'
import Container from '../../components/common/container'
import '../../styles/components/Container.scss'

export default function Inventario() {
  return (
    <Container id="Container">
      <div className="d-flex vh-90 justify-content-center align-items-center"/>
      <div className="col-20 border border-dark p-4 pt-0 "/>
      <header className="text-center mb-4"><span>INVENTARIO</span></header>
      <div className="row row justify-content-evenly justify-content-evenly">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">- Codigo</th>
              <th scope="col">Nombre</th>
              <th scope="col">Marca</th>
              <th scope="col">Precio Unidad</th>
              <th scope="col">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">- 01</th>
              <td>Jugo de naranja</td>
              <td>EL Valle</td>
              <td>2800</td>
              <td>50</td>
            </tr>
            <tr>
              <th scope="row">- 02</th>
              <td>Gaseosa Manzana</td>
              <td>Postobon</td>
              <td>1700</td>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">- 03</th>
              <td>Gaseosa Piña</td>
              <td >Fanta</td>
              <td>2000</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  )
}
