// - Todas las funciones van en ServicesPro.js solo se importan aca
// - Debe haber un boton para agregar a favoritos (checkbox)*falta esto*
// - Debe haber un boton para detalles(dentro de esta pagina debe aver un boton para favoritos)
// - Debe haber un boton para eliminar
// - Debe haber un boton para editar// - Todas las funciones van en ServicesPro.js solo se importan aca
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductoItem = ({ producto, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/productos/${producto.id}/editar`);
  };

  const handleView = () => {
    navigate(`/productos/${producto.id}`);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(`¿Seguro que deseas eliminar a ${producto.nombre} ?`);
    if (confirmDelete) {
      onDelete(producto.id);
    }
  };

  return (
    <Card className="mb-4" style={{ width: "100%", minHeight: "100%" }}>
      <Card.Body>
        <Card.Title>
          {producto.nombre}
        </Card.Title>
        <Card.Text>
          <strong>Imagen:</strong> {producto.imagen} <br />
          <strong>Precio:</strong> {producto.precio} <br />
          <strong>Descripción:</strong> {producto.descripcion} <br />
          <strong>Categoría:</strong> {producto.categoria} <br />
          <strong>Stock:</strong> {producto.stock}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="info" onClick={handleView}>Ver</Button>
          <Button variant="warning" onClick={handleEdit}>Editar</Button>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductoItem;