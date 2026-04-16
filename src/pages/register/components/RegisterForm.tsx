import "./css/RegisterForm.css";

const RegisterForm = () => {
  return (
    <article className="register-form-card">
      <h2>Crear cuenta</h2>

      <form className="register-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="register-name">Nombre completo</label>
        <input
          id="register-name"
          type="text"
          placeholder="Tu nombre"
          autoComplete="name"
          required
        />

        <label htmlFor="register-email">Correo electronico</label>
        <input
          id="register-email"
          type="email"
          placeholder="nombre@correo.com"
          autoComplete="email"
          required
        />

        <label htmlFor="register-password">Contrasena</label>
        <input
          id="register-password"
          type="password"
          placeholder="Minimo 8 caracteres"
          autoComplete="new-password"
          required
        />

        <label htmlFor="register-confirm-password">Confirmar contrasena</label>
        <input
          id="register-confirm-password"
          type="password"
          placeholder="Repite tu contrasena"
          autoComplete="new-password"
          required
        />

        <label className="register-terms">
          <input type="checkbox" required />
          Acepto terminos y condiciones
        </label>

        <button type="submit" className="register-submit">
          Crear cuenta
        </button>
      </form>

      <div className="register-divider">
        <span>registro rapido</span>
      </div>

      <div className="register-alt-actions">
        <button type="button" className="register-alt-btn">
          Continuar con Google
        </button>
      </div>
    </article>
  );
};

export default RegisterForm;
