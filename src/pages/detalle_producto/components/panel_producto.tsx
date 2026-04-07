import { IconAlignJustified, IconShieldCheckFilled } from "@tabler/icons-react";
import "./style/panel_producto.css";
import type { ProductoDetalle } from "../../../service/interfaces/ProductoDetalle";

interface Props {
  producto: ProductoDetalle;
  cantidad: number;
  setCantidad: (n: number) => void;
}

const Panel_Producto = ({ producto, cantidad, setCantidad }: Props) => {
  return (
    <div className="detalle-info">
      <h1>{producto.nombre}</h1>

      <div className="rating">
        ⭐⭐⭐⭐☆ <span>(4.0)</span>
      </div>

      <p className="marca">
        {producto.marca} - {producto.modelo}
      </p>

      <p className="descripcion">{producto.descripcion}</p>

      <p className="garantia">
        <IconShieldCheckFilled /> Garantía: {producto.garantia} meses
      </p>

      <div className="caracteristicas">
        <h3>
          <IconAlignJustified stroke={2} />
          Características
        </h3>
        <ul>
          {producto.caracteristicas.map((c, index) => (
            <li key={index}>
              <strong>{c.nombre}</strong>
              <span>{c.valor}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="compra-box">
        <span className="precio">S/ {producto.precio}</span>

        <div className="acciones">
          <div className="cantidad">
            <button onClick={() => setCantidad(Math.max(1, cantidad - 1))}>
              -
            </button>
            <span>{cantidad}</span>
            <button onClick={() => setCantidad(cantidad + 1)}>+</button>
          </div>

          <button className="btn-comprar">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Panel_Producto;
