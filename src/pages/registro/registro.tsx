import React from 'react'
import Container from '../../components/common/container'
import Select from '../../components/common/select'
import '../../styles/header/header.scss'

export default function Registro() {
  return (
    <Container id="Container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-xxl-7 col-md-12 border border-dark p-5 pt-3 ">
          <header id="head" className="text-center mb-4"><span>REGISTRO</span></header>
          <div className="row row justify-content-evenly justify-content-evenly">
            <div className="col-xxl-5 col-sm-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">MARCA</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">NOMBRE</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-10">
              <div className="form-floating mb-3 ">
                <input className="form-control" type="file" id="formFile"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">CODIGO</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">CANTIDAD</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">PRECIO UNIDAD</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">PRECIO PACK</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12 mb-3">
              <Select onChange={()=>{}} id={'01'} defaultValue={'00'} label={'UNIDADES'} options={[{ id: '01', value: '01', text: '01' },
                { id: '02', value: '02', text: '02' }]}/>
            </div>
            <div className="col-xxl-5 col-md-12 mb-3">
              <Select onChange={() => { }} id={'01'} defaultValue={'00'} label={'PRESENTACION'} options={[{ id: '01', value: '01', text: '250 Ml' },
                { id: '02', value: '02', text: '300 Ml' }]}/>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-outline-dark">REGISTRO
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
