import React from 'react'
import Container from '../../components/common/container'
import Select from '../../components/common/select'
import '../../styles/components/Container.scss'

export default function Registro() {
  return (
    <Container id="Container">
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="col-7 border border-dark p-5 pt-3 ">
          <header className="text-center mb-4"><span>REGISTRO</span></header>
          <div className="row row justify-content-evenly justify-content-evenly">
            <div className="col-5 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">MARCA</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-5 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">NOMBRE</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-10">
              <div className="form-floating mb-3">
                <input className="form-control" type="file" id="formFile"/>
              </div>
            </div>
            <div className="col-5 ">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">CODIGO</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-5 ">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">CANTIDAD</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-5 mb-3">
              <div className="form-floating mb-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <span className="input-group-text">x1</span>
                  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="form-floating mb-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">$</span>
                  <span className="input-group-text">x</span>
                  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                </div>
              </div>
            </div>
            <div className="col-5 mb-3">
              <Select id={'01'} name={'UNIDAD: '} defaultValue={'00'} label={'x'} options={[{ id: '01', value: '01', text: '01' },
                { id: '02', value: '02', text: '02' }]}/>
            </div>
            <div className="col-5  mb-3">
              <Select id={'01'} name={'PRESENTACION: n'} defaultValue={'00'} label={'ml'} options={[{ id: '01', value: '01', text: '250 Ml' },
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
