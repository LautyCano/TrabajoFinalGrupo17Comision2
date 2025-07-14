import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductos, updatedProducto } from "../Services/ServicesPro";
import ProductoForm from "../Components/Form";


export default function EditarProducto() {
  const { id } = useParams(); // obtené el ID del producto desde los parámetros de la URL
  const [producto, setProducto] = useState(null); // Estado para almacenar el producto a editar
  const navigate = useNavigate(); // Hook para redireccionar después de la actualización

  useEffect(() => {
    
    const productos = getProductos(); // obtené la lista de productos
    const foundProducto = productos.find((p) => p.id.toString() === id); // buscá el producto por ID con toString() para evitar problemas de tipo
    setProducto(foundProducto || null); // si no se encuentra, setea a null
  }, [id]);

  const handleUpdate = (updatedProductData) => {
  updatedProducto(updatedProductData); // actualizá el producto
  navigate(`/productos/${updatedProductData.id}`); // redirigí al detalle
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
