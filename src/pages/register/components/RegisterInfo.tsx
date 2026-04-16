import { Link } from "react-router";
import "./css/RegisterInfo.css";

const RegisterInfo = () => {
  return (
    <article className="register-info-panel">
      <p className="register-kicker">Cuenta nueva</p>
      <h1>Crea tu cuenta y desbloquea beneficios</h1>
      <p className="register-description">
        Guarda favoritos, administra tus pedidos y recibe ofertas personalizadas
        segun tu historial de compra.
      </p>

      <ul className="register-benefits" aria-hidden>
        <li>Perfil sincronizado en todos tus dispositivos</li>
        <li>Historial completo de compras y facturas</li>
        <li>Notificaciones de stock y descuentos</li>
      </ul>

      <p className="register-login-cta">
        Ya tienes cuenta? <Link to="/login">Iniciar sesion</Link>
      </p>
    </article>
  );
};

export default RegisterInfo;
