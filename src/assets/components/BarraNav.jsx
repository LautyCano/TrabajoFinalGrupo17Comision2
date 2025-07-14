import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import '../css/BarraNav.css';

const BarraNav = ({ userType, login, logout }) => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const navigate = useNavigate();

 const handleBuscar = (e) => {
  e.preventDefault();

  // Evita enviar búsquedas vacías
  if (!busqueda.trim()) return;

  // Redirige a la vista de resultados
  navigate(`/buscar/${busqueda.trim()}`);

  // Limpia el input de búsqueda
  setBusqueda('');
};


  return (
    <>
      {/* Modal de Login */}
      {mostrarModal && (
        <div className="fondo-modal">
          <div className="modal-login">
            <h5 className="mb-3">Ingresar usuario</h5>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className="form-control my-2"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              className="form-control my-2"
            />
            <div className="d-flex justify-content-between">
              <button
                className="btn btn-primary"
                onClick={() => {
                  login(correo, contrasena);
                  setMostrarModal(false);
                  setCorreo('');
                  setContrasena('');
                }}
              >
                Ingresar
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setMostrarModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navbar principal */}
      <Navbar
        variant="dark"
        expand="lg"
        sticky="top"
        className="barra-personalizada shadow"
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="logo-nav d-flex align-items-center">
            <img
              src="/LogoGrande.png"
              alt="Logo de VisualStore"
              className="logo-img me-2"
              style={{ maxHeight: '65px' }}
            />
            <span className="fw-bold text-info">VisualStore</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-nav" className="boton-toggle" />
          <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto nav-enlaces">
            {userType !== 'guest' && (
              <>
                <NavDropdown title="Productos" id="productos-dropdown">
                  <NavDropdown.Item as={Link} to="/">
                    Inicio
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/categorias/Pantallas">
                    Pantallas
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/categorias/Componentes-PC">
                    Componentes
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/categorias/Notebooks">
                    Notebooks
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/categorias/Celulares">
                    Celulares
                  </NavDropdown.Item>
                </NavDropdown>

                {userType === 'admin' && (
                  <Nav.Link as={Link} to="/productos/nuevo">Agregar Productos</Nav.Link>
                )}
                <Nav.Link as={Link} to="/favoritos">Favoritos</Nav.Link>
                <Nav.Link as={Link} to="/productos/acerca">Acerca de</Nav.Link>
              </>
                      )}
          </Nav>

            {/* Barra de búsqueda */}
            {userType !== 'guest' && (
              <Form className="d-flex me-3" onSubmit={handleBuscar}>
                <FormControl
                  type="search"
                  placeholder="Buscar productos..."
                  className="me-2"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <Button variant="outline-info" type="submit">Buscar</Button>
              </Form>
            )}

            {/* Autenticación */}
            {userType === 'guest' ? (
              <Button variant="outline-light" onClick={() => setMostrarModal(true)}>
                Ingresar
              </Button>
            ) : (
              <Button variant="outline-danger" onClick={logout}>
                Cerrar sesión
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default BarraNav;