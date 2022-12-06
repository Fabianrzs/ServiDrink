import React from 'react'
import Container from '../../components/common/container'
import Select from '../../components/common/select'
import '../../styles/header/header.scss'
export default function Usuarios() {
  return (
    <Container id="Container">
      <div className="d-flex  justify-content-center align-items-center">
        <div className="col-xxl-7 col-md-12 border border-dark p-5 pt-3 ">
          <header id="head" className="text-center mb-4"><span>Registro Empleado</span></header>
          <div className="row row justify-content-evenly justify-content-evenly">
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Primer Nombre</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Segundo Nombre</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Primer apellido</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Segundo Apellido</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">ID Empleado</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="1234..."/>
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Telefono</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="+57 (324...) "/>
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Gmail</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Example@gmail.com"/>
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="@#123%^&"/>
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12">
              <div className="input-group  mb-3">
                <Select id={'01'} defaultValue={'0'} label={'Rol'} options={[{ id: '01', value: '01', text: 'Vendedor' },
                  { id: '02', value: '02', text: 'Repartidor' }]}/>
              </div>
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-outline-dark">CONFIRMAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
