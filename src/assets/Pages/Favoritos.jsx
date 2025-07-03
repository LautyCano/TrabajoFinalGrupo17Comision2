MuroLautaro

import { Card, Row, Col, Container, Button } from "react-bootstrap";

export default function Favoritos({ productos, toggleFavorito }) {
  // Filtrar productos favoritos

  const favoritos = productos.filter((p) => p.isFavorite);

import { Card, Row, Col, Container, Button } from "react-bootstrap";

export default function Favoritos({ productos, toggleFavorito }) {
  const favoritos = productos.filter((p) => p.favorito);
 main

  return (
    <Container className="py-5">
      <h2 className="text-center text-light mb-4">⭐ Mis Productos Favoritos</h2>

      {favoritos.length === 0 ? (
        <p className="text-center text-muted">No hay productos favoritos.</p>
      ) : (
        <Row>
          {favoritos.map((p) => (
            <Col md={6} lg={4} key={p.id} className="mb-4">
MuroLautaro
              <Card className="h-100 bg-dark text-light border-secondary shadow-sm">

              <Card className="shadow">
main
                <Card.Img
                  variant="top"
                  src={p.imagen}
                  alt={p.nombre}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{p.nombre}</Card.Title>
                  <Card.Text>{p.descripcion}</Card.Text>
                  <Card.Text>
                    <strong>Precio:</strong> ${p.precio}
                  </Card.Text>
                  <Button
 MuroLautaro
                    variant={p.isFavorite ? "success" : "secondary"}
                    className="w-100 favorito-btn"

                    variant={p.favorito ? "success" : "secondary"}
                    className="w-100"
main
                    onClick={() => toggleFavorito(p.id)}
                  >
                    {p.favorito ? "★ En favoritos" : "☆ Añadir a favoritos"}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

