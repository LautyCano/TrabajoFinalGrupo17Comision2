// - Todas las funciones van en ServicesPro.js solo se importan aca
// - Debe haber un boton para agregar a favoritos (checkbox)*falta esto*
// - Debe haber un boton para detalles(dentro de esta pagina debe aver un boton para favoritos)
// - Debe haber un boton para eliminar
// - Debe haber un boton para editar// - Todas las funciones van en ServicesPro.js solo se importan aca
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const ProductoItem = ({ producto, onDelete, onToggleFavorito, userType }) => {
  const navigate = useNavigate();

  /* --- handlers --- */
  const handleView      = () => navigate(`/productos/${producto.id}`); // Redirige a la página de detalles del producto
  const handleEdit      = () => navigate(`/productos/${producto.id}/editar`); // Redirige a la página de edición del producto
  const handleDelete    = () => {
    if (window.confirm(`¿Eliminar “${producto.nombre}”?`)) onDelete(producto.id);
  };
  const handleFavorito = () => { // Maneja el cambio de favorito
    if (userType === 'guest') { // Si el usuario es invitado, muestra un mensaje
      alert('Debés iniciar sesión para agregar favoritos.');
      return;
    }
    onToggleFavorito(producto.id);
  };

  /* --- UI --- */
  return (
    <Card className="m-3 shadow" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Img
          variant="top"
          src={producto.imagen}
          alt={producto.nombre}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text style={{ color: 'black' }}><strong>Descripción:</strong> {producto.descripcion}</Card.Text>
        <Card.Text style={{ color: 'black' }}><strong>Categoría:</strong> {producto.categoria}</Card.Text>
        <Card.Text style={{ color: 'black' }}><strong>Stock:</strong> {producto.stock}</Card.Text>
        <Card.Text style={{ color: 'black' }}><strong>Precio:</strong> ${producto.precio}</Card.Text>

        <div className="d-flex justify-content-between mb-2">
          <Button variant="info" onClick={handleView}>Ver</Button>

          {userType === 'admin' && (
            <>
              <Button variant="warning" onClick={handleEdit}>Editar</Button>
              <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
            </>
          )}
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
