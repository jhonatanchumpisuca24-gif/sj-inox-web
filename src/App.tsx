import './App.css'

function App() {

  return (
    <div>

      <header className="hero">

        <nav className="navbar">

          <div className="logo">
            SJ<span>INOX</span>
          </div>

          <div className="links">
            <a href="#empresa">Empresa</a>
            <a href="#servicios">Servicios</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>

        </nav>


        <div className="hero-content">

          <h1>
            INGENIERÍA<br/>
            EN ACERO<br/>
            INOXIDABLE
          </h1>


          <p>
            Fabricación, diseño, reparación e instalación
            de soluciones profesionales en acero inoxidable.
          </p>


          <a 
             href="https://wa.me/51990021709?text=Hola,%20he%20revisado%20la%20página%20web%20de%20SJ%20INOX%20y%20estoy%20interesado%20en%20realizar%20un%20proyecto.%20Me%20gustaría%20coordinar%20una%20cotización%20y%20conversar%20sobre%20los%20detalles.%20Muchas%20gracias."
            target="_blank"
          >

            <button>
              COTIZAR PROYECTO
            </button>

          </a>


        </div>

      </header>



      <section id="empresa" className="empresa">

        <h2>Sobre Nosotros</h2>

        <p>
          SJ INOX es una empresa especializada en la fabricación,
          diseño y reparación de proyectos en acero inoxidable.
          Brindamos soluciones resistentes, modernas y de alta calidad
          para clientes particulares, empresas e industrias.
        </p>

      </section>



      <section className="mv">


        <div className="card">

          <h2>Misión</h2>

          <p>
            Ofrecer soluciones integrales en acero inoxidable mediante
            procesos de fabricación eficientes, materiales de calidad
            y un equipo comprometido con la satisfacción de nuestros clientes.
          </p>

        </div>



        <div className="card">

          <h2>Visión</h2>

          <p>
            Ser una empresa reconocida a nivel nacional por la calidad,
            innovación y profesionalismo en cada proyecto de acero inoxidable,
            destacando por nuestra responsabilidad y excelencia.
          </p>

        </div>


      </section>




      <section id="servicios">

        <h2 className="section-title">
          Nuestros Servicios
        </h2>


        <div className="services">


          <div className="service-card">

            <h3>Fabricación</h3>

            <p>
              Elaboración de estructuras, barandas,
              puertas, muebles y proyectos personalizados.
            </p>

          </div>



          <div className="service-card">

            <h3>Diseño Industrial</h3>

            <p>
              Diseño y desarrollo de soluciones modernas
              adaptadas a las necesidades del cliente.
            </p>

          </div>



          <div className="service-card">

            <h3>Reparación</h3>

            <p>
              Mantenimiento, reparación y mejora
              de estructuras existentes.
            </p>

          </div>


        </div>

      </section>




      <section id="proyectos" className="projects">

        <h2>
          Proyectos Realizados
        </h2>


        <div className="gallery">

          <div className="project">
            Proyecto Industrial
          </div>

          <div className="project">
            Diseño Personalizado
          </div>

          <div className="project">
            Trabajo en Acero Inoxidable
          </div>

        </div>


      </section>





      <section id="contacto" className="contact">


        <h2>
          Cotiza tu Proyecto
        </h2>


        <p>
          Contáctanos para recibir información y asesoría personalizada.
        </p>



        <div className="contact-box">


          <h3>
            SJ INOX
          </h3>


          <p>
            📱 WhatsApp
            <br/>
            +51 990 021 709
          </p>



          <p>
            ✉ Correo
            <br/>
            j-inox@hotmail.com
          </p>


        </div>


      </section>




      <footer>

        <h3>
          SJ INOX
        </h3>

        <p>
          Ingeniería y soluciones en acero inoxidable
        </p>

        <small>
          © 2026 Todos los derechos reservados
        </small>

      </footer>


    </div>
  )
}

export default App