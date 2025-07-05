import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import Home from "./assets/Pages/Home";
import ProductoList from "./assets/Components/List";
import ProductoForm from "./assets/Components/Form";
import VerProducto from "./assets/Pages/DetallesPro";
import Favoritos from "./assets/Pages/Favoritos";
import EditarProducto from "./assets/Pages/EditarPro";
import Acerca from "./assets/Pages/Acerca";
import CategoriaProducto from "./assets/Pages/CategoriaPro";
import ResultadosBusqueda from "./assets/Pages/ResultadoBusq";

/*  RECIBE LAS PROPS DESDE APP  */
export default function AppRoutes({
  productos,
  setProductos,
  toggleFavorito,
  favoritos,
  userType
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            productos={productos}
            setProductos={setProductos}
            toggleFavorito={toggleFavorito}
          />
        }
      />

      <Route
        path="/productos"
        element={
          <ProductoList
            productos={productos}
            setProductos={setProductos}
            toggleFavorito={toggleFavorito}
            userType={userType}
          />
        }
      />

      <Route
        path="/productos/nuevo"
        element={
          <ProductoForm
            productos={productos}
            setProductos={setProductos}
          />
        }
      />

      <Route
        path="/productos/:id"
        element={
          <VerProducto
            productos={productos}
            toggleFavorito={toggleFavorito}
          />
        }
      />

      <Route
        path="/favoritos"
        element={
          <Favoritos
            productos={productos}
            toggleFavorito={toggleFavorito}
          />
        }
      />

      <Route
        path="/productos/:id/editar"
        element={<EditarProducto setProductos={setProductos} />}
      />

      <Route
        path="/productos/acerca"
        element={<Acerca />}
      />

      <Route
        path="/categorias/:categoria"
        element={
          <CategoriaProducto
            productos={productos}
            toggleFavorito={toggleFavorito}
          />
        }
      />

      <Route
        path="/buscar/:termino"
        element={
          <ResultadosBusqueda
            productos={productos}
            toggleFavorito={toggleFavorito}
          />
        }
      />
       <Route
        path="*"
        element={
          <Container className="text-center py-5">
            <h1 className="display-4 text-danger mb-3">404 - Página no encontrada</h1>
            <p className="lead text-light">
              Ups... la dirección que ingresaste no existe en <span className="fw-bold text-info">VisualStore</span>.
            </p>
            <Button as={Link} to="/" variant="outline-info" size="lg" className="mt-4">
              ← Volver al Inicio
            </Button>
          </Container>
        }
      />
    </Routes>
  ); 
}
