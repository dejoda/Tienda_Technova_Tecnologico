import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductoService } from "../../service/productoService";
import type { ProductoDetalle } from "../../service/interfaces/ProductoDetalle";

import "./detalle_product.css";
import Panel_Images from "./components/panel_images";
import Panel_Producto from "./components/panel_producto";

const Detalle_product = () => {
  const { id } = useParams<{ id: string }>();

  const [producto, setProducto] = useState<ProductoDetalle | null>(null);
  const [imagenPrincipal, setImagenPrincipal] = useState("");
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const service = new ProductoService();
        const data = await service.getProductoDetalle(Number(id));

        setProducto(data);

        const imgPrincipal =
          data.imagenes.find((img) => img.principal)?.urlImagen ||
          data.imagenes[0]?.urlImagen || "";

        setImagenPrincipal(imgPrincipal);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (id) cargarProducto();
  }, [id]);

  if (!producto) return <p>Cargando producto...</p>;

  return (
    <div className="detalle-container">
      <Panel_Images
        producto={producto}
        imagenPrincipal={imagenPrincipal}
        setImagenPrincipal={setImagenPrincipal}
      />

      <Panel_Producto
        producto={producto}
        cantidad={cantidad}
        setCantidad={setCantidad}
      />
    </div>
  );
};

export default Detalle_product;
