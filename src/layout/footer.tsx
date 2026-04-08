import { IconCameraFilled, IconMovie, IconPhoneCallFilled } from "@tabler/icons-react";
import "./style/Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* LEFT - BRAND */}
        <div className="footer-brand">
          <div className="logo-mark-small" aria-hidden>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M3 12c0-4.97 4.03-9 9-9" stroke="#ff2d95" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M21 12c0 4.97-4.03 9-9 9" stroke="#7b61ff" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          <h3 className="brand-title">TECHNOVA</h3>
          <p className="slogan">
            Tecnología moderna para tu día a día. Productos de calidad con innovación constante.
          </p>
        </div>

        {/* RIGHT - LINKS */}
        <div className="footer-grid">

          <div className="col">
            <h4>Productos</h4>
            <ul>
              <li><a href="#">Laptops</a></li>
              <li><a href="#">Mouses</a></li>
              <li><a href="#">Teclados</a></li>
            </ul>
          </div>

          <div className="col">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Soporte</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div className="col">
            <h4>Síguenos</h4>
            <div className="social-icons">
              <a href="#"><IconPhoneCallFilled /></a>
              <a href="#"><IconCameraFilled /></a>
              <a href="#"><IconMovie stroke={2} /></a>
            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} TECHNOVA</span>

        <div className="legal">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;