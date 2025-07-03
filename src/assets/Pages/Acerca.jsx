import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const integrantes = [
  {
    nombre: "Lautaro Cano (administrador)",
    imagen: "/descarga.jpeg",
    descripcion: `- Desarrollo de las funciones de services
    - Implementación del componente FormularioAgregarProducto
    - Creación del componente ListaProductos
    - Diseño y desarrollo del componente Home, detalles Producto,editar, eliminar Producto
    - Barra de navegación, rutas.
    - Solucionó errores de Bootstrap y React Router.`,
  },
  {
    nombre: "Lucas Fernandez",
    imagen: "/Lucas.jpg",
    descripcion: "Diseño y aplicación del estilo global de la página (variables CSS, temas generales, etc.).",
  },
  {
    nombre: "Lautaro Muro",
    imagen: "/muro.jpg",
    descripcion: "Aplicación de estilos específicos para componentes de listas y botones reutilizables.",
  },
  {
    nombre: "Marco Zumino",
    imagen: "/Marcos.jpg",
    descripcion: `Desarrollo de funcionalidades CRUD:
    - Editar alumno
    - Eliminar alumno
    - Ver detalle de alumno.`,
  },
  {
    nombre: "Lucas Camino",
    imagen: "/Caminor.jpg",
    descripcion: "Diseño e implementación del componente BarraNavegacion para una navegación intuitiva.",
  },
  {
    nombre: "Tiago Segobia",
    imagen: "/logominas.jpeg",
    descripcion: "Aplicación de estilos generales para las vistas.",
  },
];

export default function Acerca() {
  return (
    <Container className="my-5">
      <h2 className="text-center text-white mb-4">Equipo de Desarrollo</h2>
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