import { useState } from "react";
import "./index.css";

// Base de datos de cotizaciones del portal
const COTIZACIONES_DB = [
  {
    codigo: "COT-2026-0042",
    cliente: "Constructora Lima Norte S.A.C.",
    documento: "20601234567",
    proyecto: "Barandas Modulares y Mesas Sanitarias en Acero Inoxidable",
    fecha: "23/07/2026",
    monto: "S/ 14,042.00",
    estado: "Finalizada",
    archivoPdf: "/cotizacion-ejemplo-SJINOX.pdf"
  },
  {
    codigo: "COT-2026-0038",
    cliente: "Restaurante El Mochica",
    documento: "20554321890",
    proyecto: "Campana Extractora e Instalaciones Industriales en Acero AISI 304",
    fecha: "15/06/2026",
    monto: "S/ 8,450.00",
    estado: "Finalizada",
    archivoPdf: "/cotizacion-ejemplo-SJINOX.pdf"
  },
  {
    codigo: "COT-2026-0021",
    cliente: "Corporación Alimentaria del Sur",
    documento: "20109876543",
    proyecto: "Tanque Industrial de Mezcla 1000L en Acero AISI 316",
    fecha: "10/04/2026",
    monto: "S/ 24,900.00",
    estado: "Finalizada",
    archivoPdf: "/cotizacion-ejemplo-SJINOX.pdf"
  }
];

// Proyectos de la galería
const PROYECTOS = [
  { id: 1, titulo: "Estructuras y Barandas Modulares AISI 304", cat: "barandas", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500&auto=format&fit=crop&q=60" },
  { id: 2, titulo: "Tanque Mezclador Industrial 1000L AISI 316", cat: "tanques", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=60" },
  { id: 3, titulo: "Equipamiento Sanitario de Procesos", cat: "industrial", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&auto=format&fit=crop&q=60" },
  { id: 4, titulo: "Soldadura TIG con Purgado de Argón", cat: "soldadura", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&auto=format&fit=crop&q=60" }
];

const FAQS = [
  { q: "¿Trabajan exclusivamente en Acero Inoxidable?", a: "Sí, en S.J INOX nos especializamos únicamente en la fabricación, soldadura y montaje de proyectos en acero inoxidable AISI 304 y AISI 316." },
  { q: "¿Puedo solicitar una visita a mi planta o taller?", a: "Totalmente. Nuestro taller principal está ubicado en Carabayllo, Lima. También realizamos visitas técnicas en campo para toma de medidas y evaluación sobre planos." },
  { q: "¿Cuál es la garantía de sus fabricaciones?", a: "Todos los trabajos cuentan con garantía técnica sobre uniones en soldadura, prueba de estanqueidad (en tanques) y calidad certificada del acero." }
];

function App() {
  // Estados para el cotizador
  const [servicioSeleccionado, setServicioSeleccionado] = useState("Tanques y Equipos Industriales");
  const [tipoAcero, setTipoAcero] = useState("AISI 304 (Estándar Industrial)");
  const [detallesProyecto, setDetallesProyecto] = useState("");

  // Filtros y búsquedas
  const [busqueda, setBusqueda] = useState("");
  const [filtroCat, setFiltroCat] = useState("todos");
  const [faqAbierta, setFaqAbierta] = useState<number | null>(null);

  const cotizacionesFiltradas = COTIZACIONES_DB.filter(
    (item) =>
      item.codigo.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.cliente.toLowerCase().includes(busqueda.toLowerCase()) ||
      item.documento.includes(busqueda)
  );

  const proyectosFiltrados = filtroCat === "todos" 
    ? PROYECTOS 
    : PROYECTOS.filter(p => p.cat === filtroCat);

  const enviarCotizacionWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const numeroTel = "51990021709";
    const mensaje = `Hola S.J INOX, solicito una cotización para un proyecto en Acero Inoxidable:%0A%0A` +
      `🛠️ *Servicio:* ${servicioSeleccionado}%0A` +
      `🧪 *Calidad:* ${tipoAcero}%0A` +
      `📝 *Detalles:* ${detallesProyecto || "Sin especificaciones adicionales"}`;
    
    window.open(`https://wa.me/${numeroTel}?text=${mensaje}`, "_blank");
  };

  return (
    <div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo logo-welding">
          S.J <span>INOX</span>
        </div>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Taller</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#cotizador">Cotizador</a>
          <a href="#portal-clientes">Portal Clientes</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <div className="badge-tech">TALLER ESPECIALIZADO EN CARABAYLLO, LIMA</div>
          <h1>
            FABRICACIÓN Y
            <br />
            SOLDADURA INDUSTRIAL EN
            <br />
            <span className="highlight-text">ACERO INOXIDABLE</span>
          </h1>

          <p>
            Mano de obra técnica y maestría en acero inoxidable AISI 304 y 316. Tanques, estructuras, tuberías de proceso y mobiliario industrial a medida.
          </p>

          <div className="hero-buttons">
            <a href="#cotizador" className="btn-primary">
              ⚡ Cotizar Proyecto por WhatsApp
            </a>
            <a href="#portal-clientes" className="btn-secondary">
              📄 Consultar Cotizaciones PDF
            </a>
          </div>
        </div>

        <div className="hero-card-preview">
          <div className="card-header-bar">CULTURA DE TALLER & CALIDAD</div>
          <p><strong>Inspección y Acabado Manual</strong></p>
          <ul>
            <li>✓ Purgado de argón interno en soldadura TIG</li>
            <li>✓ Prueba de hermeticidad en recipientes</li>
            <li>✓ Acabados Satinado, Pulido y Esmerilado</li>
          </ul>
        </div>
      </section>

      {/* HISTORIA REAL & NOSOTROS */}
      <section id="nosotros" className="section">
        <h2>Tradición Metalúrgica desde 2012</h2>
        <p className="center-text">
          Más que una empresa, somos un taller de especialización técnica enfocado en la precisión del acero inoxidable.
        </p>

        <div className="two-columns">
          <div>
            <h3>Nuestra Historia en el Taller</h3>
            <p style={{ marginBottom: "15px", lineHeight: "1.7", color: "#cbd5e1" }}>
              <strong>S.J INOX</strong> nació el <strong>01 de febrero de 2012</strong> de la mano de <strong>Serapio Taype Chumpisuca</strong> en Carabayllo. Comenzamos como un taller de ajuste y moldeo artesanal, perfeccionando la técnica del purgado de argón y los pulidos sanitarios.
            </p>
            <p style={{ lineHeight: "1.7", color: "#cbd5e1" }}>
              Hoy combinamos la maestría del trabajo manual con el cálculo técnico para ofrecer a plantas alimentarias, mineras, pesqueras y constructoras estructuras metálicas impecables y de durabilidad garantizada.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <h3>+12</h3>
              <p>Años en Carabayllo</p>
            </div>
            <div className="stat-box">
              <h3>100%</h3>
              <p>Especialistas en Inox</p>
            </div>
            <div className="stat-box">
              <h3>304/316</h3>
              <p>Aceros Certificados</p>
            </div>
            <div className="stat-box">
              <h3>TIG/MIG</h3>
              <p>Procesos Con Purgado</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section dark-section">
        <h2>Proyectos y Fabricaciones</h2>
        <p className="center-text">Estructuras, equipos y trabajos especiales desarrollados directamente en nuestro taller.</p>

        <div className="gallery-filter">
          <button className={filtroCat === "todos" ? "active" : ""} onClick={() => setFiltroCat("todos")}>Todos</button>
          <button className={filtroCat === "tanques" ? "active" : ""} onClick={() => setFiltroCat("tanques")}>Tanques & Depósitos</button>
          <button className={filtroCat === "industrial" ? "active" : ""} onClick={() => setFiltroCat("industrial")}>Procesos Industriales</button>
          <button className={filtroCat === "barandas" ? "active" : ""} onClick={() => setFiltroCat("barandas")}>Estructuras & Barandas</button>
          <button className={filtroCat === "soldadura" ? "active" : ""} onClick={() => setFiltroCat("soldadura")}>Soldadura TIG</button>
        </div>

        <div className="gallery-grid">
          {proyectosFiltrados.map((item) => (
            <div key={item.id} className="gallery-card">
              <img src={item.img} alt={item.titulo} />
              <div className="gallery-info">
                <h4>{item.titulo}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COTIZADOR INTERACTIVO */}
      <section id="cotizador" className="section">
        <h2>Cotizador Rápido de Proyectos</h2>
        <p className="center-text">
          Ingresa las especificaciones de tu trabajo y conecta directamente con el área técnica por WhatsApp.
        </p>

        <form className="interactive-form" onSubmit={enviarCotizacionWhatsApp}>
          <div className="form-group">
            <label>Tipo de Proyecto:</label>
            <select 
              value={servicioSeleccionado} 
              onChange={(e) => setServicioSeleccionado(e.target.value)}
            >
              <option value="Tanques y Equipos Industriales">Tanques y Depósitos de Proceso</option>
              <option value="Redes de Tuberías Inox">Redes de Tuberías Sanitarias</option>
              <option value="Estructuras Industriales Inox">Estructuras, Pasarelas y Plataformas</option>
              <option value="Equipamiento Sanitario y Campanas">Equipamiento Sanitario y Extracción</option>
              <option value="Servicios de Soldadura TIG / MIG">Servicio de Soldadura TIG / MIG</option>
            </select>
          </div>

          <div className="form-group">
            <label>Calidad de Acero Inoxidable:</label>
            <select 
              value={tipoAcero} 
              onChange={(e) => setTipoAcero(e.target.value)}
            >
              <option value="AISI 304 (Estándar Industrial)">Acero Inoxidable AISI 304 (Alimenticio / Comercial)</option>
              <option value="AISI 316 (Alta Resistencia Química)">Acero Inoxidable AISI 316 (Químico / Marino / Farmacéutico)</option>
              <option value="Requiere Asesoría Técnica">Requiero asesoría técnica según plano</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Medidas, Espesores o Detalles del Trabajo:</label>
            <textarea 
              rows={4}
              placeholder="Ej: Tanque de 1000 Litros en acero inoxidable AISI 316 con agitador, o pasarela de 15m..."
              value={detallesProyecto}
              onChange={(e) => setDetallesProyecto(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-whatsapp">
            📱 Enviar Datos a WhatsApp para Cotizar
          </button>
        </form>
      </section>

      {/* PORTAL DE CLIENTES */}
      <section id="portal-clientes" className="section dark-section">
        <h2>Consulta tu Cotización PDF</h2>
        <p className="center-text">
          Ingresa tu RUC, DNI o N° de Cotización para descargar la documentación oficial emitida por S.J INOX.
        </p>

        <div className="search-bar-container">
          <input 
            type="text" 
            placeholder="🔍 Buscar por RUC, Empresa o N° Cotización (ej: COT-2026-0042)..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="cotizaciones-grid">
          {cotizacionesFiltradas.length > 0 ? (
            cotizacionesFiltradas.map((cot, index) => (
              <div key={index} className="cotizacion-card">
                <div className="cot-header">
                  <span className="cot-code">{cot.codigo}</span>
                  <span className="cot-status">{cot.estado}</span>
                </div>
                <h3 style={{ fontSize: "17px", marginBottom: "8px", color: "#ffffff" }}>{cot.cliente}</h3>
                <p style={{ fontSize: "13px", color: "#94a3b8" }}><strong>RUC/DNI:</strong> {cot.documento}</p>
                <p style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}><strong>Proyecto:</strong> {cot.proyecto}</p>
                <div className="cot-footer">
                  <div>
                    <span style={{ fontSize: "12px", color: "#64748b" }}>📅 {cot.fecha}</span>
                    <span className="cot-amount">{cot.monto}</span>
                  </div>
                  <a 
                    href={cot.archivoPdf} 
                    download={`Cotizacion_${cot.codigo}.pdf`}
                    className="btn-download"
                  >
                    📥 Descargar PDF
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              No se encontraron cotizaciones con los datos ingresados.
            </div>
          )}
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section id="faq" className="section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-container">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button className="faq-question" onClick={() => setFaqAbierta(faqAbierta === idx ? null : idx)}>
                <span>{faq.q}</span>
                <span>{faqAbierta === idx ? "−" : "+"}</span>
              </button>
              {faqAbierta === idx && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section contact">
        <h2>Contacto Directo con el Taller</h2>
        <p className="center-text">Atención personalizada para cotizaciones, visitas a obra e ingeniería de proyectos.</p>

        <div className="contact-box">
          <div>
            <strong style={{ color: "#00f0ff" }}>🟢 WhatsApp Directo</strong>
            <p style={{ marginTop: "8px", color: "#cbd5e1" }}>+51 990 021 709</p>
          </div>
          <div>
            <strong style={{ color: "#00f0ff" }}>📧 Correo Técnico</strong>
            <p style={{ marginTop: "8px", color: "#cbd5e1" }}>j-inox@hotmail.com</p>
          </div>
          <div>
            <strong style={{ color: "#00f0ff" }}>📍 Taller Principal</strong>
            <p style={{ marginTop: "8px", color: "#cbd5e1" }}>Carabayllo, Lima - Perú</p>
          </div>
        </div>
      </section>

      <footer>
        <h3>S.J INOX</h3>
        <p style={{ marginTop: "5px" }}>Fundado por Serapio Taype Chumpisuca (01/02/2012) | Taller de Acero Inoxidable en Carabayllo</p>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a 
        href="https://wa.me/51990021709?text=Hola%20S.J%20INOX,%20quisiera%20consultar%20por%20un%20trabajo%20en%20acero%20inoxidable" 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-float"
      >
        💬
      </a>

    </div>
  );
}

export default App;