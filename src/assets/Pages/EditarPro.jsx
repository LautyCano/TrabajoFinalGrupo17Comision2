import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductos, initializeProducto, updatedProducto } from "../Services/ServicesPro";
import ProductoForm from "../Components/Form";

export default function EditarProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    initializeProducto();
    const productos = getProductos();
    const foundProducto = productos.find((p) => p.id.toString() === id);
    setProducto(foundProducto || null);
  }, [id]);

  const handleUpdate = (updatedProductData) => { // Renombrar para claridad
  updatedProducto({ ...updatedProductData, id: id }); // Asegurar que el ID se pasa correctamente
  navigate(`/productos/${id}`);
};

  if (!producto) {
    return <p style={{ color: "red" }}> Error: Producto no encontrado.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Editar Producto</h2>
      <ProductoForm producto={producto} onSubmit={handleUpdate} />
    </div>
  );
}