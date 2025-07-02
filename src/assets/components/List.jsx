// Crea una lista que muestre los productos
// - Cada producto debe mostrar su imagen, nombre, precio, descripcion, categoria.

import React from 'react';
import { useEffect, useState } from "react";
import { getProductos, deleteProducto } from "../Services/ServicesPro";
import ProductoItem from "./Items";
import { Container, Row, Col } from "react-bootstrap";

export const ProductoList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {

    const fetchedProductos = getProductos();
    setProductos(fetchedProductos);
  }, []);


  const handleDeleteProducto = (id) => {
    deleteProducto(id); //Elimina el producto del servicio
    const update = getProductos();// Vuelve a obtener la lista actualizada
    setProductos(update);// Actualiza el estado con la nueva lista
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Lista de Productos</h2>

      {productos.length > 0 ? (
        <Row>
          {productos.map((producto) => (
            <Col md={6} lg={4} className="mb-4" key={producto.id}>
              <ProductoItem producto={producto} onDelete={handleDeleteProducto} />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">No hay productos disponibles.</p>
      )}
    </Container>
  );
};