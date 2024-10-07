
import BannerTitulo from '../BannerTitulo/BannerTitulo'
import Historia from '../Historia/Historia';
import './About.css'
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
                <img src={galeriaCuatro} className="d-block w-100" alt="NeloWorks Historia" />
              </div>

            <div className="carousel-item">
                <img src={galeriaUno} className="d-block w-100" alt="NeloWorks Historia" />
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

        <Historia/>
      </div>
    </div>
  )
}

export default About