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
          <div className="row row justify-content-evenly">
            <div className="col-5  text-center">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Marca</label>
              </div>
            </div>
            <div className="col-5 text-center">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Nombre</label>
              </div>
            </div>
            <div className="col-5">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">$ Unidad</label>
              </div>
            </div>
            <div className="col-5">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">$ Pack</label>
              </div>
            </div>
            <div className="col-5">
              <Select id={'01'} name={'unidad'} defaultValue={'00'} label={'x'} options={[{ id: '01', value: '01', text: '01' },
                { id: '02', value: '02', text: '02' }]}/>
            </div>
            <div className="col-5">
              <Select id={'01'} name={'presentacion'} defaultValue={'00'} label={'ml'} options={[{ id: '01', value: '01', text: '250 Ml' },
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
