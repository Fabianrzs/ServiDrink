import React from 'react'
import Container from '../../components/common/container'
import '../../styles/components/Container.scss'

export default function Pedidos() {
  return (
    <Container id="Container">
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="col-7 border border-dark p-5 pt-3 ">
          <header className="text-center mb-4"><span>PEDIDOS</span></header>
          <div className="row row justify-content-evenly">
            <div className="col-5  text-center">
              <div className="form-floating mb-3">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
              </div>
            </div>
            <div className="col-5 text-center">
              <div className="form-floating mb-3">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4"/>
              </div>
            </div>
            <div className="col-5">
              <div className="form-floating mb-3">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
              </div>
            </div>
            <div className="col-5">
              <div className="form-floating mb-3">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className ="col-md-5">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
          </div>
          <div className="col-3">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip"/>
          </div>
        </div>
        <div className="col-md-1">
          <button type="submit" className="btn btn-primary">PEDIR</button>
        </div>
      </div>

    </Container>
  )
}
