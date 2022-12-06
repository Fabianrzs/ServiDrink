import React from 'react'
import Container from '../../components/common/container'
import '../../styles/header/header.scss'

export default function ListaPedido() {
  return (
    <Container id="Container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-xxl-7 col-md-12 border border-dark p-5 pt-3 ">
          <header id="head" className="text-center mb-4"><span>Pedidos Activos</span></header>
          <div className="row justify-content-evenly justify-content-evenly">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Codigo Pedido</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Tineda</th>
                  <th scope="col">Barrio</th>
                  <th scope="col">Codigo Vendedor</th>
                  <th scope="col">Codigo Repartidor</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  )
}
