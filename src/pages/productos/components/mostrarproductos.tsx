import { useEffect, useState } from "react";
import { ProductoService } from "../../../service/productoService";
import type { ProductoPresentacion } from "../../../service/interfaces/ProductoPresentacion";
import defaultImg from "../../../assets/default.jpg";
import { Link } from "react-router";

import "./style/mostrarproductos.css";

const service = new ProductoService();

const MostrarProductos = () => {
  const [productos, setProductos] = useState<ProductoPresentacion[]>([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await service.getProductosPresentacion();
        setProductos(data);
      } catch (error) {
        console.error(error);
      }
    };
    cargarProductos();
  }, []);

  const agregarAlCarrito = (producto: ProductoPresentacion) => {
    console.log("Añadido al carrito:", producto);
    // Aquí puedes integrar tu lógica de carrito
  };

  return (
    <section className="products-section">
      <h2>Productos</h2>

      <div className="product-grid">
        {productos.map((p) => (
          <div
            key={p.id}
            className="product-card"
            style={{ backgroundImage: `url(${p.imagen || defaultImg})` }}
          >
            <div className="product-overlay">
              <Link to={`/detalle_product/${p.id}`} className="product-brand">
                {p.marca}
              </Link>
              <Link to={`/detalle_product/${p.id}`} className="product-name">
                {p.nombre}
              </Link>
              <p className="product-category">{p.categoria}</p>
              <p className="product-description">{p.descripcion}</p>
              <p className="price">S/ {p.precio}</p>
              <button
                className="btn-small"
                onClick={() => agregarAlCarrito(p)}
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostrarProductos;