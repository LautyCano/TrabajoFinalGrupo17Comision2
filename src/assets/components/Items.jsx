// - Todas las funciones van en ServicesPro.js solo se importan aca
// - Debe haber un boton para agregar a favoritos (checkbox)*falta esto*
// - Debe haber un boton para detalles(dentro de esta pagina debe aver un boton para favoritos)
// - Debe haber un boton para eliminar
// - Debe haber un boton para editar// - Todas las funciones van en ServicesPro.js solo se importan aca
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductoItem = ({ producto, onDelete, onToggleFavorito }) => {
  const navigate = useNavigate();

  /* --- handlers --- */
  const handleView      = () => navigate(`/productos/${producto.id}`);
  const handleEdit      = () => navigate(`/productos/${producto.id}/editar`);
  const handleDelete    = () => {
    if (window.confirm(`¿Eliminar “${producto.nombre}”?`)) onDelete(producto.id);
  };
  const handleFavorito  = () => onToggleFavorito(producto.id);

  /* --- UI --- */
  return (
    <Card className="m-3 shadow" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text><strong>Precio:</strong> ${producto.precio}</Card.Text>

        <div className="d-flex justify-content-between mb-2">
          <Button variant="info"    onClick={handleView}>Ver</Button>
          <Button variant="warning" onClick={handleEdit}>Editar</Button>
          <Button variant="danger"  onClick={handleDelete}>Eliminar</Button>
        </div>

        {/* Botón Favorito */}
        <Button
          variant={producto.favorito ? "success" : "secondary"}
          className="w-100"
          onClick={handleFavorito}
        >
          {producto.favorito ? "★ En favoritos" : "☆ Añadir a favoritos"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductoItem;
