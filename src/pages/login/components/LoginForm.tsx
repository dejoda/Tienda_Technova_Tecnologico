import "./css/LoginForm.css";

const LoginForm = () => {
  return (
    <article className="login-form-card">
      <h2>Iniciar sesion</h2>

      <form className="login-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="login-email">Correo electronico</label>
        <input
          id="login-email"
          type="email"
          placeholder="nombre@correo.com"
          autoComplete="email"
          required
        />

        <label htmlFor="login-password">Contrasena</label>
        <input
          id="login-password"
          type="password"
          placeholder="Ingresa tu contrasena"
          autoComplete="current-password"
          required
        />

        <div className="login-row">
          <label className="login-remember">
            <input type="checkbox" />
            Recordarme
          </label>
          <a href="#" className="login-forgot">
            Olvide mi contrasena
          </a>
        </div>

        <button type="submit" className="login-submit">
          Entrar
        </button>
      </form>

      <div className="login-divider">
        <span>o continua con</span>
      </div>

      <div className="login-alt-actions">
        <button type="button" className="login-alt-btn">
          Google
        </button>
        <button type="button" className="login-alt-btn">
          GitHub
        </button>
      </div>
    </article>
  );
};

export default LoginForm;
