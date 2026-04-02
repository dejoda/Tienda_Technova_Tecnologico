import "../inicio/inicio.css";
import Hero from "../../pages/inicio/components/hero";
import Categorias from "./components/categorias";
import Destacados from "./components/destacados";

const Inicio = () => {
  return (
    <main className="home-page">
      <Hero></Hero>

      <Categorias></Categorias>

      <Destacados></Destacados>
    </main>
  );
};

export default Inicio;
