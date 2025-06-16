//Debe mostrar los detalles del producto seleccionados
// - Debe mostrar el nombre, precio, descripcion, categoria, imagen y todo lo que se necesite
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductos, initializeProducto } from "../Services/ServicesPro";
import { Card } from "react-bootstrap";

export default function VerProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    initializeProducto();
    const productos = getProductos();
    const foundProducto = productos.find((p) => p.id.toString() === id);
    setProducto(foundProducto || null);
  }, [id]);

  if (!producto) {
    return <p className="text-danger text-center mt-4">⚠ Producto no encontrado.</p>;
  }

  return (
    <div className="d-flex justify-content-center mt-5">
        <Card style={{ width: "24rem" }} className="shadow">
          <Card.Body>
            <Card.Title>{producto.nombre}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">Precio: {producto.precio}</Card.Subtitle>
            <Card.Text>
              <strong>Descripción:</strong> {producto.descripcion} <br />
              <strong>Categoría:</strong> {producto.categoria} <br />
              <strong>Imagen:</strong> {producto.imagen} <br />
              <strong>ID interno:</strong> {producto.id}
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}