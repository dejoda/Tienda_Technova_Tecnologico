import { useEffect, useState } from "react";
import { ProductoService } from "../service/productoService";
import type { ProductoPresentacion } from "../service/interfaces/ProductoPresentacion";

import heroImg from "../assets/hero.jpg";
import laptopImg from "../assets/categoria/laptop.jpg";
import perifericos from "../assets/categoria/perifericos.jpg";
import audifonosImg from "../assets/categoria/audifonos.jpg";
import componentesImg from "../assets/categoria/componentes.jpg";
import "./style/inicio.css";

const Inicio = () => {
  const [productos, setProductos] = useState<ProductoPresentacion[]>([]);

  const marcas = ["TECHNOVA", "Quantum", "NextGear", "HyperOne", "NeonPulse"];

  const categorias = [
    {
      name: "Laptops",
      icon: "💻",
      description: "Portátiles de alto rendimiento",
      image: laptopImg,
    },
    {
      name: "Periféricos",
      icon: "🖱️",
      description: "Teclados, mouses y más",
      image: perifericos,
    },
    {
      name: "Audio",
      icon: "🎧",
      description: "Audífonos y parlantes",
      image: audifonosImg,
    },
    {
      name: "Componentes",
      icon: "🔧",
      description: "Partes para ensamblar",
      image: componentesImg,
    },
  ];

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const service = new ProductoService();
        const data = await service.getProductosPresentacion();

        // 👇 SOLO 8 PRODUCTOS
        setProductos(data.slice(0, 8));
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    cargarProductos();
  }, []);

  return (
    <main className="home-page">
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Hero introductorio de la tienda"
      >
        <div className="hero-overlay">
          <p className="hero-subtitle">Tu destino tecnológico</p>
          <h1>Bienvenido a TECHNOVA</h1>
          <p className="hero-text">
            Equipamos tu día a día con equipos y accesorios de última
            generación.
          </p>
          <a href="/Productos" className="hero-btn">
            Ver catálogos y ofertas
          </a>
        </div>
      </section>

      <section className="categories-section">
        <h2>Categorías</h2>
        <div className="category-grid">
          {categorias.map((categoria) => (
            <article
              key={categoria.name}
              className="category-card"
              style={
                categoria.image
                  ? { backgroundImage: `url(${categoria.image})` }
                  : {}
              }
            >
              <div className="category-overlay">
                <div className="category-icon">{categoria.icon}</div>
                <h3>{categoria.name}</h3>
                <p>{categoria.description}</p>
                <a className="btn-small" href="/Productos">
                  Explorar
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brands-section">
        <h2>Marcas</h2>
        <ul className="brand-list">
          {marcas.map((marca) => (
            <li key={marca} className="brand-item">
              {marca}
            </li>
          ))}
        </ul>
      </section>

      <section className="products-section">
        <h2>Productos destacados</h2>
        <div className="product-grid">
         {productos.map((producto) => (
  <div
    key={producto.id}
    className="product-card"
    style={
      producto.imagen
        ? {
            backgroundImage: `url(${producto.imagen})`,
          }
        : {}
    }
  >
    <div className="product-overlay">

      <span className="product-brand">
        {producto.marca}
      </span>

      <h3>{producto.nombre}</h3>

      <p>{producto.descripcion}</p>

      <div className="product-footer">
        <span className="price">S/ {producto.precio}</span>

        <a href="/Productos" className="btn-small">
          Ver más
        </a>
      </div>

    </div>
  </div>
))}
        </div>
      </section>
    </main>
  );
};

export default Inicio;
