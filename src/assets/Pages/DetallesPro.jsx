import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductos, toggleFavorito } from '../services/ServicesPro';
import { Card, Button } from 'react-bootstrap';

export default function DetallesPro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);

  const loadProducto = () => {
    const productos = getProductos();
    const foundProducto = productos.find(p => p.id === id);
    setProducto(foundProducto);
  };

  useEffect(() => {
    loadProducto();
  }, [id]);

  const handleToggleFavorite = () => {
    if (producto) {
      toggleFavorito(producto.id);
      loadProducto();
    }
  };

  const goToFavoritos = () => navigate('/productos/favoritos');
  const goBackToList = () => navigate('/productos');

  if (!producto) {
    return <p className="text-danger text-center mt-4">Producto no encontrado o cargando...</p>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="shadow-lg p-3 bg-dark text-white" style={{ width: '26rem' }}>
        <div className="d-flex justify-content-end">
          <Button variant="outline-light" onClick={goBackToList} className="mb-2">
            ← Volver
          </Button>
        </div>

        {producto.imagen && (
          <Card.Img
            variant="top"
            src={producto.imagen}
            alt={producto.nombre}
            style={{ height: "220px", objectFit: "cover", borderRadius: "10px" }}
          />
        )}

        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Precio: ${producto.precio}</Card.Subtitle>

          <Card.Text>
            <strong>Descripción:</strong> {producto.descripcion} <br />
            <strong>Categoría:</strong> {producto.categoria} <br />
            <strong>Stock:</strong> {producto.stock}
          </Card.Text>

          <div className="d-flex justify-content-between mt-3">
            <Button
              variant={producto.isFavorite ? "success" : "outline-light"}
              onClick={handleToggleFavorite}
              className="flex-fill me-2"
            >
              {producto.isFavorite ? "★ En Favoritos" : "☆ Añadir a Favoritos"}
            </Button>
            <Button variant="info" onClick={goToFavoritos}>
              Ver Favoritos
            </Button>
            
          </div>

        </Card.Body>
      </Card>
    </div>
  );
}
