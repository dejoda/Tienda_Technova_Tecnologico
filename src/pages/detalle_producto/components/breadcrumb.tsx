import "./style/breadcrumb.css"
import { Link, useParams } from "react-router";

interface BreadCrumbProps {
    productName?: string;
}

const BreadCrumb = ({ productName }: BreadCrumbProps) => {
    const { name } = useParams<{ name: string }>();

    const currentProductName =
        productName?.trim() || (name ? decodeURIComponent(name) : "Detalle del producto");

    return (
        <nav className="breadcrumb" aria-label="Miga de pan">
            <Link to="/">Inicio</Link>
            <span className="separator">/</span>
            <Link to="/productos">Productos</Link>
            <span className="separator">/</span>
            <span className="activo">{currentProductName}</span>
        </nav>
    );
};

export default BreadCrumb;