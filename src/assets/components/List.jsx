// Crea una lista que muestre los productos
// - Cada producto debe mostrar su imagen, nombre, precio, descripcion, categoria.
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getProductos, deleteProducto } from "../Services/ServicesPro"; 
import ProductoItem from "./Items";   // ruta relativa correcta

export const ProductoList = ({ productos, setProductos, toggleFavorito, userType }) => {
  
  /* Eliminar */
  const handleDeleteProducto = (id) => {
    deleteProducto(id);
    setProductos(getProductos());
  };

  return (
    <Container className="mt-4">
      {productos.length ? (
        <Row>
          {productos.map((p) => (
            <Col md={6} lg={4} key={p.id} className="mb-4">
              <ProductoItem
                producto={p}
                onDelete={handleDeleteProducto}
                onToggleFavorito={toggleFavorito}
                userType={userType} // Pasar el tipo de usuario
              />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">No hay productos disponibles.</p>
      )}
    </Container>
  );

};

export default ProductoList;
