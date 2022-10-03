import React from 'react'
import Container from '../../components/common/container'
import Select from '../../components/common/select'

export default function Pedidos() {
  return (
    <Container>
      <div className="row text-center">
        <div className="col-12">
          Pedidos
        </div>
        <div className="col-12">
          <Select id={'01'} name={'pedidos'} defaultValue={''} label={'-'} options={[{ id: '01', value: '01', text: 'coca' }]}/>
        </div>
      </div>
    </Container>
  )
}
