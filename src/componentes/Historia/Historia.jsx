import './Historia.css'

const Historia = () => {
  return (
    <div className='about-contenido'>
    <div>
      <h3>Historia</h3>
      <p> Nacho, un artesano apasionado, da vida a alfombras únicas con la técnica <strong>Tufting.</strong> Cada pieza, elaborada con materiales naturales y técnicas tradicionales, refleja la belleza de su región.
        Inspirado por <strong>Neloworks</strong>, Nacho crea alfombras con diseños vibrantes y texturas suaves. Su trabajo no solo es un arte, sino también un compromiso con sus clientes.
        Las alfombras de Neloworks son más que alfombras; <strong>son piezas únicas que cuentan historias</strong>, conectan con la tradición y aportan calidez a cualquier espacio.
      </p>
    </div>
    <div className='imagen-historia'>
        <img src="../img/hero/uno.webp" alt="Historia Nelo Works"/>
        
        <div className='historia-galeria'>
            <button> Ver Galeria </button>
        </div>
    </div>
  </div>
  )
}

export default Historia