import React from 'react';
import ProductoList from "../Components/List";
import "../css/Home.css";

const Home = ({ productos, setProductos, toggleFavorito }) => {
  return (
    <div className="pantalla-completa">
      <h1 className="hero-title">Nuestros Productos</h1>
      <p className="hero-subtitle">Conocé lo que tenemos para ofrecerte</p>

      <ProductoList productos={productos} setProductos={setProductos} toggleFavorito={toggleFavorito} />

      <footer>© 2025 MarcoDev. Todos los derechos reservados.</footer>
    </div>
  );
};

export default Home;
