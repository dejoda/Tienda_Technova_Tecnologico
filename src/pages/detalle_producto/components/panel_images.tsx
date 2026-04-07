import "./style/panel_images.css";
import type { ProductoDetalle } from "../../../service/interfaces/ProductoDetalle";

interface Props {
  producto: ProductoDetalle;
  imagenPrincipal: string;
  setImagenPrincipal: (url: string) => void;
}

const Panel_Images = ({
  producto,
  imagenPrincipal,
  setImagenPrincipal,
}: Props) => {
  return (
    <div className="detalle-img">
      <img src={imagenPrincipal} alt={producto.nombre} />

      <div className="miniaturas">
        {producto.imagenes.map((img, index) => (
          <img
            key={index}
            src={img.urlImagen}
            alt="mini"
            onClick={() => setImagenPrincipal(img.urlImagen)}
          />
        ))}
      </div>
    </div>
  );
};

export default Panel_Images;
