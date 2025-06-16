//Crea una barra de navegacion que tenga:
// - Un logo que redirija a la pagina principal
// - Home o Inicio
// - Subir Productos
// - Acerca de

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const BarraNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="w-100">
      <Container fluid className="px-4">
        {/* Logo que redirige al inicio */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/logominas.jpeg"
            alt="Logo Escuela de Minas"
            style={{ height: "40px", marginRight: "10px" }}
          />
          Escuela de Minas
        </Navbar.Brand>

        {/* Botón hamburguesa para móviles */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Menú colapsable */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Lista de Productos</Nav.Link>
            <Nav.Link as={Link} to="/productos/nuevo">Nuevo Producto</Nav.Link>
            <Nav.Link as={Link} to="/productos/acerca">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNav;