import React from 'react';
import { ProductoList }  from '../Components/List'; 
//import '../css/Home.css';

const Home = () => {
  return (
    <div className="pantalla-completa">
      <h1 className="hero-title">Nuestros Productos</h1>
      <p className="hero-subtitle">Conocé lo que tenemos para ofrecerte</p>

      <ProductoList />

      <footer>© 2025 MarcoDev. Todos los derechos reservados.</footer>
    </div>
  );
};

export default Home;
