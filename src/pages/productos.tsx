import { useEffect, useState } from "react";
import { ProductoService } from "../service/productoService";
import type { ProductoPresentacion } from "../service/interfaces/ProductoPresentacion";
import defaultImg from "../assets/default.jpg"

const service = new ProductoService();

const Productos = () => {

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

  return (
    <>
      <h2>Productos</h2>

      {productos.map(p => (
        <div key={p.id}>
          <img
            src={p.imagen || defaultImg}
            alt={p.nombre}
            width="150"
          />
          <h3>{p.nombre}</h3>
          <p>{p.marca}</p>
          <p>S/ {p.precio}</p>
        </div>
      ))}
    </>
  );
};

export default Productos;