import './About.css'
import BannerTitulo from '../BannerTitulo/BannerTitulo'

const About = () => {

  const galeriaUno = "../img/galeria/galeria-1.webp";
  const galeriaDos = "../img/galeria/galeria-2.webp";
  const galeriaTres = "../img/galeria/galeria-3.webp";
  const galeriaCuatro = "../img/galeria/galeria-4.webp";
  const galeriaCinco = "../img/galeria/galeria-5.webp";
  const galeriaSeis = "../img/galeria/galeria-6.webp";
  const galeriaSiete = "../img/galeria/galeria-7.webp";
  const galeriaOcho = "../img/galeria/galeria-8.webp";

  return (
    <div id='about'>
      <BannerTitulo titulo="" subtitulo="Galeria de Nelo" />
      <div className='about'>
        <div className='about-imagenes'>
          <div className='grande'><img src={galeriaUno} alt="NeloWorks Historia" /></div>
          <div className='grande'><img src={galeriaCuatro} alt="NeloWorks Historia" /></div>
          <div className='mediano'><img src={galeriaDos} alt="NeloWorks Historia" /></div>
          <div className='grande'><img src={galeriaTres} alt="NeloWorks Historia" /></div>
          <div className='grande'><img src={galeriaCinco} alt="NeloWorks Historia" /></div>
          <div className='mediano'><img src={galeriaSeis} alt="NeloWorks Historia" /></div>
          <div className='chico'><img src={galeriaSiete} alt="NeloWorks Historia" /></div>
          <div className='mediano'><img src={galeriaOcho} alt="NeloWorks Historia" /></div>
        </div>

        {/*     galeria react  */}
        <section className='galeria-responsive'>
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={galeriaUno} className="d-block w-100" alt="NeloWorks Historia" />
              </div>
              <div className="carousel-item">
                <img src={galeriaCuatro} className="d-block w-100" alt="NeloWorks Historia" />
              </div>
              <div className="carousel-item">
                <img src={galeriaDos} className="d-block w-100" alt="NeloWorks Historia" />
              </div>
              <div className="carousel-item">
                <img src={galeriaTres} className="d-block w-100" alt="NeloWorks Historia" />
              </div>

              <div className="carousel-item">
                <img src={galeriaCinco} className="d-block w-100" alt="NeloWorks Historia" />
              </div>
              <div className="carousel-item">
                <img src={galeriaSeis} className="d-block w-100" alt="NeloWorks Historia" />
              </div>
              <div className="carousel-item">
                <img src={galeriaSiete} className="d-block w-100" alt="NeloWorks Historia" />
              </div>
              <div className="carousel-item">
                <img src={galeriaOcho} className="d-block w-100" alt="NeloWorks Historia" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        {/*     galeria react  */}

        <div className='about-contenido'>
          <div>
            <h3>Historia</h3>
            <p> Nacho, un artesano apasionado, da vida a alfombras únicas con la técnica <strong>Tufting.</strong> Cada pieza, elaborada con materiales naturales y técnicas tradicionales, refleja la belleza de su región.
              Inspirado por <strong>Neloworks</strong>, Nacho crea alfombras con diseños vibrantes y texturas suaves. Su trabajo no solo es un arte, sino también un compromiso con sus clientes.
              Las alfombras de Neloworks son más que alfombras; <strong>son piezas únicas que cuentan historias</strong>, conectan con la tradición y aportan calidez a cualquier espacio.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About