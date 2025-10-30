import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const integrantes = [
  {
    nombre: "Fernandez Ocampo Lucas Adrian",
    imagen: "/lucasimage.jpg",
    descripcion: `- Desarrollo de las funciones de services
    - Implementación del componente FormularioAgregarProducto
    - Creación del componente ListaProductos
    - Barra de navegación, rutas.
    - Solucionó errores de Bootstrap y React Router.`,
  },
];

export default function Acerca() {
  return (
    <Container className="my-5">
      <h2 className="text-center text-white mb-4">Desarrollador</h2>
      <Row className="g-4 justify-content-center">
        {integrantes.map((persona, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="bg-dark text-white h-100 shadow">
              <Card.Img variant="top" src={persona.imagen} alt={persona.nombre} />
              <Card.Body>
                <Card.Title>{persona.nombre}</Card.Title>
                <Card.Text style={{ whiteSpace: "pre-line" }}>
                  {persona.descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}