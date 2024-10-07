import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer id='footer'>
      <div className='logo-footer'>
  {/*       <img src="../img/logo-maquina.webp" alt="logo" /> */}
        <img src="../img/logo-letras.webp" alt="logo" />
      </div>
      
      <div className='redes'><h3>REDES</h3>
        <ul>
          <li><i className="bi bi-tiktok"></i></li>
          <li><i className="bi bi-instagram"></i></li>
          <li><i className="bi bi-whatsapp"></i></li>
          <li><i className="bi bi-facebook"></i></li>
        </ul>
      </div>

      <div className='contacto'>
        <h3>CONTACTO</h3>
        <div className='contacto-datos'>
       <strong> +54 - 2944134510</strong>
       <strong> Neloworks.turfting@gmail.com</strong>
        </div>
      </div>
      
      <div className='categorias'>
        <h3>CATEGORIAS</h3>
        <ul>
        <Link to='/'><li><strong>Inicio</strong></li> </Link>
           <Link to='productos'><li><strong>Productos</strong></li></Link>
          <Link to='contacto'><li><strong>Contacto</strong></li></Link>
          <Link to='informacion'><li><strong>Informacion de envios</strong></li></Link>
          <Link to='productos'><li><strong>Seguir Comprando!</strong></li></Link>
        </ul>
      </div>

    </footer>
  )
}

export default Footer