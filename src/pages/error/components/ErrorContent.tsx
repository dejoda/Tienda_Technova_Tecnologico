import { Link } from "react-router";
import "./css/ErrorContent.css";

const ErrorContent = () => {
  return (
    <div className="error-content">
      <p className="error-label">Error 404</p>
      <h1>Pagina no encontrada</h1>
      <p className="error-text">
        La ruta que buscas no existe o fue movida. Puedes volver al inicio
        para seguir explorando nuestros productos.
      </p>

      <div className="error-actions">
        <Link to="/" className="error-btn error-btn-primary">
          Ir al inicio
        </Link>
        <Link to="/productos" className="error-btn error-btn-secondary">
          Ver productos
        </Link>
        <button
          type="button"
          className="error-btn error-btn-ghost"
          onClick={() => window.history.back()}
        >
          Volver atras
        </button>
      </div>

      <div className="error-tags" aria-hidden>
        <span>Navegacion rapida</span>
        <span>Ruta invalida</span>
        <span>Soporte disponible</span>
      </div>
    </div>
  );
};

export default ErrorContent;
