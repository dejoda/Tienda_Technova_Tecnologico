import heroImg from "../assets/hero.jpg";
import "./style/inicio.css";

const inicio = () => {
    const marcas = ["TECHNOVA", "Quantum", "NextGear", "HyperOne", "NeonPulse"];
    const productos = [
        { id: 1, name: "Laptop Ultrabook X1", price: "$999", description: "Rendimiento pro para trabajo y gaming ligero." },
        { id: 2, name: "Teclado Mecánico RGB", price: "$79", description: "Tactile y duradero con luces personalizables." },
        { id: 3, name: "Mouse Gummies", price: "$49", description: "Precisión 16K DPI y grip ergonómico." },
        { id: 4, name: "Audífonos 7.1 Surround", price: "$129", description: "Sonido inmersivo y micrófono con cancelación de ruido." },
    ];

    return (
        <main className="home-page">
            <section
                className="hero"
                style={{ backgroundImage: `url(${heroImg})` }}
                aria-label="Hero introductorio de la tienda"
            >
                <div className="hero-overlay">
                    <p className="hero-subtitle">Tu destino tecnológico</p>
                    <h1>Bienvenido a TECHNOVA</h1>
                    <p className="hero-text">
                        Equipamos tu día a día con equipos y accesorios de última generación. Calidad, velocidad y diseño
                        en un solo lugar.
                    </p>
                    <a href="/Productos" className="hero-btn">
                        Ver catálogos y ofertas
                    </a>
                </div>
            </section>

            <section className="brands-section">
                <h2>Marcas presentes</h2>
                <ul className="brand-list">
                    {marcas.map((marca) => (
                        <li key={marca} className="brand-item">
                            {marca}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="products-section">
                <h2>Productos destacados</h2>
                <div className="product-grid">
                    {productos.map((product) => (
                        <article key={product.id} className="product-card">
                            <div className="product-thumb">{product.name.slice(0, 1)}</div>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                            <div className="product-footer">
                                <span className="price">{product.price}</span>
                                <a className="btn-small" href="/Productos">
                                    Comprar
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default inicio;