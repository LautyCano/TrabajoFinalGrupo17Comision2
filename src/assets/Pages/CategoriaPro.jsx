import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductoItem from "../Components/Items";

const CategoriaProducto = ({ productos, toggleFavorito }) => {
  const { categoria } = useParams();

  const filtrados = productos.filter(
    (p) => p.categoria.toLowerCase() === categoria.toLowerCase()
  );

  return (
    <Container className="py-5">
      <h2 className="text-center text-light mb-4"> Productos en {categoria}</h2>
      {filtrados.length > 0 ? (
        <Row>
          {filtrados.map((p) => (
            <Col md={6} lg={4} key={p.id} className="mb-4">
              <ProductoItem producto={p} onToggleFavorito={toggleFavorito} />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center text-muted">No hay productos en esta categoría.</p>
      )}
    </Container>
  );
};

export default CategoriaProducto;