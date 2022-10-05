import React from 'react'
import Container from '../../components/common/container'
import Select from '../../components/common/select'

export default function Pedidos() {
  return (
    <Container>
      <div className="row">
        <div className="col-12">
          Pedidos
        </div>
        <div className="col-12">
          <Select id={'01'} name={'pedidos'} defaultValue={''} label={'-'} options={[{ id: '01', value: '01', text: 'coca' }]}/>
        </div>
        <div className="col  align-self-end text-center">
          <button type="button" className="btn btn-outline-dark">LOGIN</button>
        </div>
      </div>
    </Container>
  )
}
