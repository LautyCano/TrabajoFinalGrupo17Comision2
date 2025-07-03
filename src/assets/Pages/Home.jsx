import React from 'react';
import ProductoList from "../Components/List";
import "../css/Home.css";
import { Container } from 'react-bootstrap';

const Home = ({ productos, setProductos, toggleFavorito }) => {
  return (
    <Container className="py-5">
      <h1 className="text-center text-light mb-3">Nuestros Productos</h1>
      <p className="text-center text-secondary mb-5">Conocé lo que tenemos para ofrecerte</p>

      <ProductoList productos={productos} setProductos={setProductos} toggleFavorito={toggleFavorito} />

      <footer className="text-center mt-5 text-muted">© 2025 VisualStore - Todos los derechos reservados.</footer>
    </Container>
  );
};

export default Home;
