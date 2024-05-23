

const FinalizarCompra = ({cliente}) => {
    const {nombre, email} = cliente;
  return (
    <>
    <h4>Muchas gracias por inscribirte, {nombre} !</h4>
    <h5>te enviamos los datos de inscripcion a: {email} </h5>
    </>

  )
}

export default FinalizarCompra