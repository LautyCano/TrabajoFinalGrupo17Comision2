import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import ProductoList from "./assets/Components/List";
import ProductoForm from "./assets/Components/Form";
import VerProducto from "./assets/Pages/DetallesPro";
import Favoritos from "./assets/Pages/Favoritos";
import EditarProducto from "./assets/Pages/EditarPro";
import Acerca from "./assets/Pages/Acerca";

/*  RECIBE LAS PROPS DESDE APP  */
export default function AppRoutes({
  productos,
  setProductos,
  toggleFavorito,
  favoritos,
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
        path="/productos/favoritos"
        element={
          <Favoritos
            productos={productos}
            toggleFavorito={toggleFavorito}
          />
        }
      />

      <Route
        path="/productos/:id/editar"
        element={
          <EditarProducto
            setProductos={setProductos}
          />
        }
      />

      <Route
        path="/productos/acerca"
        element={<Acerca />}
      />
    </Routes>
  );
}
