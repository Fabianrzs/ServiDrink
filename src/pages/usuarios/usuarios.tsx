import React, { useEffect, useState } from "react";
import Container from '../../components/common/container'
import Select from '../../components/common/select'
import '../../styles/header/header.scss'
import Alert from "../../components/common/Alert";

export default function Usuarios() {
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
    if (form.primernombre == undefined || form.primernombre == "") {
      setMesaje("Llena el campo primer nombre")
      setVisible(true);
      setColor("danger");
      return false;

    } else if (form.segundonombre == undefined || form.segundonombre == "") {
      setMesaje("Llena el campo segundo nombre")
      setVisible(true);
      setColor("danger");
      return false;

    }else if (form.primerapellido == undefined || form.primerapellido == "") {
      setMesaje("Llena el campo primer apellido")
      setVisible(true);
      setColor("danger");
      return false;

    }else if (form.segundoapellido == undefined || form.segundoapellido == "") {
      setMesaje("Llene el campo segundo apellido")
      setVisible(true);
      setColor("danger");
      return false;

    }
    else if (form.id == undefined || form.id == "") {
      setMesaje("Llena el campo ID Empleado")
      setVisible(true);
      setColor("danger");
      return false;

    } else if (form.telefono == undefined || form.telefono == "") {
      setMesaje("Llena el campo Telefono")
      setVisible(true);
      setColor("danger");
      return false;
    }
    else if (form.gmail == undefined || form.gmail == "") {
      setMesaje("Llena el campo Gmail")
      setVisible(true);
      setColor("danger");
      return false;
    }
    else if (form.pass == undefined || form.pass == "") {
      setMesaje("Llena el campo Password")
      setVisible(true);
      setColor("danger");
      return false;
    }
    else if (form.rol == undefined || form.rol == "") {
      setMesaje("Seleccione un ROL")
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
      <div className="d-flex  justify-content-center align-items-center">
        <div className="col-xxl-7 col-md-12 border border-dark p-5 pt-3 ">
          <header id="head" className="text-center mb-4"><span>Registro Empleado</span></header>

          {visible && <Alert color={color} message={mesaje} setVisible={setVisible} />}

          <div className="row row justify-content-evenly justify-content-evenly">
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Primer Nombre</span>
                <input onChange={(e) => handleInputChange(e)} name={'primernombre'} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Segundo Nombre</span>
                <input onChange={(e) => handleInputChange(e)} name={'segundonombre'}  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Primer apellido</span>
                <input onChange={(e) => handleInputChange(e)} name={'primerapellido'}  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Segundo Apellido</span>
                <input onChange={(e) => handleInputChange(e)} name={'segundoapellido'}  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12 ">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">ID Empleado</span>
                <input onChange={(e) => handleInputChange(e)} name={'id'}  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="1234..." />
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Telefono</span>
                <input onChange={(e) => handleInputChange(e)} name={'telefono'}  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="+57 (324...) " />
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Gmail</span>
                <input onChange={(e) => handleInputChange(e)} name={'gmail'}  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Example@gmail.com" />
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12">
              <div className=" input-group  mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                <input onChange={(e) => handleInputChange(e)} name={'pass'}  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="@#123%^&" />
              </div>
            </div>
            <div className="col-xxl-5 col-sm-12">
              <div className="input-group  mb-3">
                <Select onChange={handleInputChange} id={'rol'} defaultValue={'0'} label={'Rol'} options={[{ id: '01', value: '01', text: 'Vendedor' },
                { id: '02', value: '02', text: 'Repartidor' }]} />
              </div>
            </div>
            <div className="text-center">
              <button  onClick={(e) => Enviar(e)} type="submit" className="btn btn-outline-dark">CONFIRMAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
