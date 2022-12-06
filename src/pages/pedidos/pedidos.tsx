import React, { useEffect, useState } from "react";
import Container from '../../components/common/container'
import '../../styles/children/Container.scss'
import Select from '../../components/common/select'
import '../../styles/header/header.scss'
import Alert from "../../components/common/Alert";

export default function Pedidos() {

  const [visible, setVisible] = useState(false)
  const [color, setColor] = useState("danger")
  const [mesaje, setMesaje] = useState("Llena esa vaina vale ")

  const [form, setForm]

    = useState<any>({})
  useEffect(() => {
    console.log(form)
  }, [form])
  const handleInputChange = ({ target }: any) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const validadoForm = (): boolean => {
    if (form.tienda == undefined || form.tienda == "") {
      setMesaje("Llena el campo de tienda")
      setVisible(true);
      setColor("danger");
      return false;
    } else if (form.barrio == undefined || form.barrio == "") {
      setMesaje("Llena el campo de barrio")
      setVisible(true);
      setColor("danger");
      return false;
    }
    return true
  }

  const Enviar = (event: any) => {

    event.preventDefault();

    if (validadoForm()) {
      setVisible(true);
      setColor("success");
      setMesaje("Registro Exitoso")
      localStorage.setItem("Pedido", JSON.stringify(form))
    }
  }
  return (
    <Container id="Container">
      <form id={'form'}>
        <div className="d-flex  justify-content-center align-items-center">
          <div className="col-xxl-7 col-md-12 border border-dark p-5 pt-3 ">
            <header id="head" className="text-center mb-4"><span>PEDIDOS</span></header>




            {visible && <Alert color={color} message={mesaje} setVisible={setVisible} />}

            <div className="row row justify-content-evenly justify-content-evenly">
              <div className="col-xxl-5 col-sm-12 ">
                <div className=" input-group  mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">TIENDA</span>
                  <input id={'tienda'} name={'tienda'} onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
              </div>
              <div className="col-xxl-5 col-sm-12 ">
                <div className=" input-group  mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">BARRIO</span>
                  <input id={'barrio'} name={'barrio'} onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
              </div>
              <div className="col-xxl-5 col-sm-12 ">
                <div className=" input-group  mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">CALLE</span>
                  <input id={'calle'} name={'calle'} onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Calle 00 #00-00 " />
                </div>
              </div>
              <div className="col-xxl-5 col-sm-12">
                <div className=" input-group  mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">TELEFONO</span>
                  <input id={'telefono'} name={'tel'} onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="+57 (324...) " />
                </div>
              </div>
              <div className="col-xxl-5 col-sm-12">
                <div className="input-group  mb-3">
                  <Select id={'presentacion'} defaultValue={'0'} onChange={handleInputChange} label={'PRESENTACION'} options={[{ id: '01', value: '01', text: '250 Ml' },
                  { id: '02', value: '02', text: '300 Ml' }]} />
                </div>
              </div>
              <div className="col-xxl-5 col-sm-12 ">
                <div className=" input-group  mb-3">
                  <span className="input-group-text" id="inputGroup-sizing-default">CANTIDAD</span>
                  <input id={'cantidad'} name={'canridad'} onChange={(e) => handleInputChange(e)} type="number" min="1" max="100" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="DIGITE CANTIDAD... " />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button onClick={(e) => Enviar(e)} type="submit" className="btn btn-outline-dark">CONFIRMAR
              </button>
            </div>
          </div>
        </div>
      </form>
    </Container>
  )
}
