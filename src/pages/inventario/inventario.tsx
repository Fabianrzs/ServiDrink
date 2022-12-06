import React from 'react'
import Container from '../../components/common/container'
import '../../styles/header/header.scss'

export default function Inventario() {
  return (
    <Container id="Container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-xxl-7 col-md-12 border border-dark p-5 pt-3 ">
          <header id="head" className="text-center mb-4"><span>INVENTARIO</span></header>
          <div className="row justify-content-evenly justify-content-evenly">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Codigo</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Marca</th>
                  <th scope="col">Precio Unidad</th>
                  <th scope="col">Precio Pack</th>
                  <th scope="col">Cantidad Pack</th>
                  <th scope="col">Presetacion</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">01</th>
                  <td>Pony Malta</td>
                  <td>Bavaria S.A.</td>
                  <td>2.800</td>
                  <td>33.600</td>
                  <td>12</td>
                  <td>1L</td>
                  <td>1.200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  )
}
