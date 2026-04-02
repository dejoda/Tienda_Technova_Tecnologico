
import laptopImg from "../../../assets/categoria/laptop.jpg";
import perifericos from "../../../assets/categoria/perifericos.jpg";
import audifonosImg from "../../../assets/categoria/audifonos.jpg";
import componentesImg from "../../../assets/categoria/componentes.jpg";

import "./style/categorias.css"

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

const Categorias = () => {
  return (
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
  );
};

export default Categorias;