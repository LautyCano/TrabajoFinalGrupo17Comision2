import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductos, toggleFavorito } from '../Services/ServicesPro'; // Importar toggleFavorito
import { Card, Button } from 'react-bootstrap'; // Importar Button de react-bootstrap

export default function DetallesPro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null); // Estado para el producto detallado

  const loadProducto = () => {
    const productos = getProductos(); // Obtener todos los productos
    const foundProducto = productos.find(p => p.id === id); // Buscar por ID
    setProducto(foundProducto);
  };

  useEffect(() => {
    loadProducto(); // Cargar el producto al montar y cuando el ID cambie
  }, [id]); // Dependencia del efecto para recargar si el ID de la URL cambia

  const handleToggleFavorite = () => {
    if (producto) {
      toggleFavorito(producto.id); // Llama a la función del servicio
      loadProducto(); // Recarga el producto para que el botón se actualice
    }
  };

  const goToFavoritos = () => {
    navigate('/favoritos');
  };

  const goBackToList = () => {
    navigate('/productos');
  };

  if (!producto) {
    return <p className="text-danger text-center mt-4">Producto no encontrado o cargando...</p>;
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "24rem" }} className="shadow">
        <Card.Body>
          {/* Botón de volver a la lista (X) */}
          <Button
            variant="outline-secondary"
            className="position-absolute top-0 end-0 m-2"
            onClick={goBackToList}
            aria-label="Volver a la lista de productos"
          >
            &#x2715; {/* Símbolo de "X" */}
          </Button>

          {producto.imagen && (
            <Card.Img
              variant="top"
              src={producto.imagen}
              alt={producto.nombre}
              style={{
                height: "200px",
                objectFit: "cover",
                width: "100%"
              }}
            />
          )}
          <Card.Title className="mt-3">{producto.nombre}</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">Precio: ${producto.precio}</Card.Subtitle>
          <Card.Text style={{ color: 'black' }}>
            <strong>Descripción:</strong> {producto.descripcion} <br />
            <strong>Categoría:</strong> {producto.categoria} <br />
            <strong>Stock:</strong> {producto.stock} <br />
            <strong>Precio:</strong> ${producto.precio} <br />
            <strong>ID interno:</strong> {producto.id}
          </Card.Text>

          {/* Contenedor para los botones inferiores */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            {/* Botón de Favorito */}
            <Button
              variant={producto.isFavorite ? "success" : "secondary"} // Verde si es favorito, gris si no
              onClick={handleToggleFavorite}
              className="flex-grow-1 me-2"
            >
              {producto.isFavorite ? " En favoritos" : " Añadir a favoritos"}
            </Button>

            {/* Botón "Ir a Favoritos" */}
            <Button variant="info" onClick={goToFavoritos} > Ir a Favoritos </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}