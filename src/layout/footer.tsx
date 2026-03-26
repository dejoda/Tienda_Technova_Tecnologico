import "./style/footer.css";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-brand">
                <h3>TechNova</h3>
                <p>Soluciones y productos tecnologicos para estudiantes y profesionales.</p>
            </div>

            <nav className="footer-nav" aria-label="Enlaces del footer">
                <h4>Enlaces</h4>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/Productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/Nosotros">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

            <section className="footer-contact" aria-label="Informacion de contacto">
                <h4>Contacto</h4>
                <p>Correo: soporte@technova.com</p>
                <p>Telefono: +57 300 000 0000</p>
                <p>Bogota, Colombia</p>
            </section>

            <div className="footer-copy">
                <small>© 2026 TechNova. Todos los derechos reservados.</small>
            </div>
        </footer>
    );
};

export default Footer;