import { Link } from "react-router";
import "./css/LoginInfo.css";

const LoginInfo = () => {
  return (
    <article className="login-info-panel">
      <p className="login-kicker">Bienvenido a TECHNOVA</p>
      <h1>Inicia sesion para continuar tu experiencia</h1>
      <p className="login-description">
        Accede a tu cuenta para guardar productos, revisar compras y recibir
        recomendaciones personalizadas en tiempo real.
      </p>

      <div className="login-info-pills" aria-hidden>
        <span>Checkout rapido</span>
        <span>Historial de pedidos</span>
        <span>Soporte prioritario</span>
      </div>

      <p className="login-register-cta">
        Aun no tienes cuenta? <Link to="/register">Crear cuenta</Link>
      </p>
    </article>
  );
};

export default LoginInfo;
