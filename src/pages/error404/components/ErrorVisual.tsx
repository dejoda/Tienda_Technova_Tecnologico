import "./css/ErrorVisual.css";

const ErrorVisual = () => {
  return (
    <div className="error-visual" aria-hidden>
      <span className="glow glow-pink" />
      <span className="glow glow-violet" />
      <span className="grid-lines" />
      <div className="error-code">404</div>
      <p className="error-mini">TECHNOVA</p>
    </div>
  );
};

export default ErrorVisual;
