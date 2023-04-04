
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../imagenes/${props.imagen}.png`)}
      alt={`Foto de ${props.nombre}`}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><span>{props.nombre}</span> in {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} at <span>{props.empresa}</span></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>

      </div>
    </div>
  );   
}

export default Testimonio;