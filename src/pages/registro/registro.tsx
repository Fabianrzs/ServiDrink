import React, { useEffect, useState } from 'react'
import Container from '../../components/common/container'
import Select from '../../components/common/select'
import '../../styles/header/header.scss'
import Alert from '../../components/common/Alert'

export default function Registro() {

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
    if (form.marca == undefined || form.marca == "") {
      setMesaje("Llena el campo marca")
      setVisible(true);
      setColor("danger");
      return false;

    } else if (form.nombre == undefined || form.nombre == "") {
      setMesaje("Llena el campo nombre")
      setVisible(true);
      setColor("danger");
      return false;

    }else if (form.codigo == undefined || form.codigo == "") {
      setMesaje("Llena el campo de codigo")
      setVisible(true);
      setColor("danger");
      return false;

    }else if (form.preciounidad == undefined || form.preciounidad == "") {
      setMesaje("Llene el campo precio unidades")
      setVisible(true);
      setColor("danger");
      return false;

    }
    else if (form.preciopack == undefined || form.preciopack == "") {
      setMesaje("Llena el campo Precio Pack")
      setVisible(true);
      setColor("danger");
      return false;

    } else if (form.cantidad == undefined || form.cantidad == "") {
      setMesaje("Llena el campo cantidad")
      setVisible(true);
      setColor("danger");
      return false;

    } else if (form.unidades == undefined || form.unidades == "") {
      setMesaje("Llena el campo unidades")
      setVisible(true);
      setColor("danger");
      return false;
    }
    else if (form.presentacion == undefined || form.presentacion == "") {
      setMesaje("Llena el campo presentacion")
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
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-xxl-7 col-md-12 border border-dark p-5 pt-3 ">
          <header id="head" className="text-center mb-4"><span>REGISTRO</span></header>

          {visible && <Alert color={color} message={mesaje} setVisible={setVisible} />}

          <div className="row row justify-content-evenly justify-content-evenly">
            <div className="col-xxl-5 col-sm-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">MARCA</span>
                <input name={'marca'}  onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">NOMBRE</span>
                <input name={'nombre'} onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">CODIGO</span>
                <input name={'codigo'} onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">CANTIDAD</span>
                <input name={'cantidad'}  onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">PRECIO UNIDAD</span>
                <input name={'preciounidad'}  onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12">
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">PRECIO PACK</span>
                <input name={'preciopack'}  onChange={(e) => handleInputChange(e)} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
              </div>
            </div>
            <div className="col-xxl-5 col-md-12 mb-3">
              <Select onChange={handleInputChange} id={'unidades'} defaultValue={'00'} label={'UNIDADES'} options={[{ id: '01', value: '01', text: '01' },
                { id: '02', value: '02', text: '02' }]}/>
            </div>
            <div className="col-xxl-5 col-md-12 mb-3">
              <Select onChange={handleInputChange} id={'presentacion'} defaultValue={'00'} label={'PRESENTACION'} options={[{ id: '01', value: '01', text: '250 Ml' },
                { id: '02', value: '02', text: '300 Ml' }]}/>
            </div>
          </div>
          <div className="text-center">
            <button onClick={(e) => Enviar(e)} type="submit" className="btn btn-outline-dark">REGISTRO
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
