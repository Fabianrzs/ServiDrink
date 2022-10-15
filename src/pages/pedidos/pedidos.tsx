import React from 'react'
import Container from '../../components/common/container'
import '../../styles/components/Container.scss'
import Select from '../../components/common/select'

export default function Pedidos() {
  return (
    <Container id="Container">
      <div className="d-flex vh-100 justify-content-center align-items-center">
        <div className="col-7 border border-dark p-5 pt-3 ">
          <header className="text-center mb-4"><span>PEDIDOS</span></header>
          <div className="row row justify-content-evenly justify-content-evenly">
            <div className="col-5  text-center">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">TIENDA</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-5 text-center">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">BARRIO</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-5 text-center">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">CALLE</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Calle 00 #00-00 "/>
              </div>
            </div>
            <div className="col-5 text-center">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">TELEFONO</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="+57 (324...) "/>
              </div>
            </div>
            <div className="col-5">
              <div className="input-group  mb-3">
                <Select id={'01'} defaultValue={'0'} label={'PRESENTACION'} options={[{ id: '01', value: '01', text: '250 Ml' },
                  { id: '02', value: '02', text: '300 Ml' }]}/>
              </div>
            </div>
            <div className="col-5  text-center">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">CANTIDAD</span>
                <input type="number" min="1" max="100" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="DIGITE CANTIDAD... "/>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="button" className="btn btn-outline-dark">CONFIRMAR
            </button>
          </div>
        </div>
      </div>

    </Container>
  )
}
