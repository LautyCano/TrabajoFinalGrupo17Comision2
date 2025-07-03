//Crea una barra de navegacion que tenga:
// - Un logo que redirija a la pagina principal
// - Home o Inicio
// - Subir Productos
// - Acerca de

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../css/BarraNav.css';

const BarraNav = () => {
  return (
    <Navbar variant="dark" expand="lg" sticky="top" className="barra-personalizada">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="logo-nav">
          <img
            src="/LogoGrande.png"
            alt="Logo de VisualStore"
            className="logo-img"
            style={{ maxWidth: '130px', maxHeight: '100px' }}
          />
          
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="boton-toggle" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto nav-enlaces">
            <Nav.Link as={Link} to="/">Lista de Productos</Nav.Link>
            <Nav.Link as={Link} to="/productos/nuevo">Nuevo Producto</Nav.Link>
            <Nav.Link as={Link} to="/productos/favoritos">Favoritos</Nav.Link>
            <Nav.Link as={Link} to="/productos/acerca">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BarraNav;