import { Link } from "react-router";
import "./style/header.css";

const Header = () => {
    return (
        <header className="site-header">
            <div className="logo">
                <Link to="/">LOGO</Link>
            </div>

            <nav className="menu" aria-label="Navegacion principal">
                <ul>
                    <li>
                        <Link to={''}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={'Productos'}>Productos</Link>
                    </li>
                    <li>
                        <Link to={'Nosotros'}>Nosotros</Link>
                    </li>
                    <li>
                        <Link to={'Login'}>Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;