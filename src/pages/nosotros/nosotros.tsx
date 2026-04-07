import "./nosotros.css";

const Nosotros = () => {
  return (
    <div className="nosotros-container">

      {/* HERO */}
      <section className="nosotros-hero">
        <h1>Sobre <span>TECHNOVA</span></h1>
        <p>Innovación tecnológica al alcance de todos</p>
      </section>

      {/* HISTORIA */}
      <section className="nosotros-section">
        <div className="nosotros-text">
          <h2>Nuestra Historia</h2>
          <p>
            Technova nace con la visión de revolucionar la forma en que las personas
            acceden a la tecnología. Desde nuestros inicios, nos enfocamos en ofrecer
            productos de alta calidad, combinando innovación, rendimiento y diseño.
          </p>
          <p>
            Lo que empezó como una pequeña iniciativa, hoy se ha convertido en una
            tienda tecnológica en crecimiento, conectando a cientos de usuarios con
            lo último en laptops, smartphones y accesorios.
          </p>
        </div>

        <div className="nosotros-card">
          <span>🚀</span>
          <h3>Innovación constante</h3>
          <p>Siempre a la vanguardia en tecnología</p>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="nosotros-grid">
        <div className="card">
          <h3>🎯 Misión</h3>
          <p>
            Brindar productos tecnológicos de calidad, con una experiencia de compra
            moderna, segura y accesible para todos.
          </p>
        </div>

        <div className="card">
          <h3>👁️ Visión</h3>
          <p>
            Convertirnos en una de las principales tiendas tecnológicas del país,
            destacando por innovación y confianza.
          </p>
        </div>

        <div className="card">
          <h3>💡 Valores</h3>
          <p>
            Compromiso, innovación, calidad y enfoque en el cliente.
          </p>
        </div>
      </section>

      {/* CONFIANZA */}
      <section className="nosotros-confianza">
        <div className="confianza-item">
          <h3>🚚 Envíos rápidos</h3>
          <p>Entregas seguras a todo el país</p>
        </div>

        <div className="confianza-item">
          <h3>🔒 Compra segura</h3>
          <p>Pagos protegidos y verificados</p>
        </div>

        <div className="confianza-item">
          <h3>💬 Soporte 24/7</h3>
          <p>Atención rápida en todo momento</p>
        </div>
      </section>

      {/* STATS */}
      <section className="nosotros-stats">
        <div>
          <h2>+500</h2>
          <p>Clientes satisfechos</p>
        </div>

        <div>
          <h2>+1200</h2>
          <p>Productos vendidos</p>
        </div>

        <div>
          <h2>4.8⭐</h2>
          <p>Calificación promedio</p>
        </div>
      </section>

    </div>
  );
};

export default Nosotros;