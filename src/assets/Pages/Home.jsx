import React from 'react';
import ProductoList from "../Components/List";
import "../css/Home.css";
import { Container, Carousel } from 'react-bootstrap';

const Home = ({ productos, setProductos, toggleFavorito }) => {
  const muestraProductos = productos.slice(0, 5); // o usar Math.random() para variedad

  return (
    <Container className="py-5">
      <h1 className="display-5 fw-bold text-center text-info mb-2"> {/* H1  genera el titulo */}
        Bienvenido a VisualStore
      </h1>
      <p className="text-center lead text-light mb-5">
        Descubrí la mejor tecnología al alcance de tu mano
      </p> 

      {/* Carrusel de muestra */}
      <h2 className="text-center text-warning mb-4"> Productos destacados</h2>

      <Carousel interval={2500} pause="hover" className="mb-5">
        {productos.slice(0, 4).map((p) => (
          <Carousel.Item key={p.id}>
            <div className="d-flex justify-content-center">
              <div className="bg-dark p-3 rounded" style={{ width: '300px' }}>
                {/* Imágenes que van a aparecer en el carrusel */}
                <img 
                  src={p.imagen}
                  alt={p.nombre}
                  className="img-fluid rounded mb-3"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <h5 className="text-white">{p.nombre}</h5> {/* nombre de los productos */}
                <p className="text-light mb-0">{p.descripcion}</p>
                <small className="text-info d-block mt-2"> ${p.precio}</small>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Lista de Productos */}
      <h2 className="text-center text-light mb-4"> Lista completa de productos</h2> 
      <ProductoList
        productos={productos}
        setProductos={setProductos}
        toggleFavorito={toggleFavorito}
      />

      <footer className="text-center mt-5 text-white">
        © 2025 VisualStore - Todos los derechos reservados.
      </footer>
    </Container>
  );
};

export default Home;