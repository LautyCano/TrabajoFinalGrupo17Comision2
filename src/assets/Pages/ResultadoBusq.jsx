import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductoItem from "../Components/Items";

const ResultadosBusqueda = ({ productos, toggleFavorito }) => {
  const { termino } = useParams();

  const resultados = productos.filter((p) => // Filtra los productos que coinciden con el término de búsqueda
    p.nombre.toLowerCase().includes(termino.toLowerCase()) // p es el producto actual, tolowerCase() asegura que la búsqueda no sea sensible a mayúsculas
  );

  return (
    <Container className="py-5">
        {/* Título principal */}
        <h2 className="text-center text-info mb-4 display-6">
         Resultados para <span className="fw-bold">“{termino}”</span>
        </h2>

        {/* Descripción adicional */}
        <p className="text-center text-secondary mb-4">
        {resultados.length > 0
            ? `Se encontraron ${resultados.length} producto(s) relacionados.`
            : `No hay resultados que coincidan con “${termino}”.`}
        </p>

        {/* Grid de productos */}
        {resultados.length > 0 ? (
        <Row className="justify-content-center">
            {resultados.map((p) => (
            <Col md={6} lg={4} key={p.id} className="mb-4">
                <ProductoItem producto={p} onToggleFavorito={toggleFavorito} />
            </Col>
            ))}
        </Row>
        ) : (
        <div className="text-center mt-5">
            <p className="text-muted fst-italic">
            Intentalo con otro término o revisá nuestras categorías.
            </p>
            <Button variant="outline-info" as={Link} to="/" className="mt-3">
            ← Volver al inicio
            </Button>
        </div>
        )}
    </Container>
    );
}

export default ResultadosBusqueda;