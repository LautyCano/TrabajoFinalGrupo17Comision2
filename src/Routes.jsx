import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home"; 
import { ProductoList } from "./assets/Components/List"; 
import ProductoForm from "./assets/Components/Form";
import VerProducto from "./assets/Pages/DetallesPro";
import Favoritos from './assets/Pages/Favoritos';
import EditarProducto from "./assets/Pages/EditarPro";
import Acerca from "./assets/Pages/Acerca";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<ProductoList />} />
      <Route path="/productos/nuevo" element={<ProductoForm />} />
      <Route path="/productos/:id" element={<VerProducto />} />
      <Route path="/productos" element={<Favoritos />} />
      <Route path="/productos/:id/editar" element={<EditarProducto />} />
      <Route path="/productos/acerca" element={<Acerca />} />
    </Routes>
  );
}