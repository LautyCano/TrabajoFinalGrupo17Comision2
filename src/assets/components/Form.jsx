// Crea un formulario que tenga:
// - Campos ID, imagen(bootstrap), Nombre, Precio, Descripcion, Categoria, Stock,etc.
// - Botones Enviar
// - Restricciones, EJ parametros de nombre no permite numeros.
// - Un boton para enviar
// - Un boton para limpiar *falta esto*
// - Mensajes de registrados, y de fallo de registro*falta esto*
// - Estado de Producto para favorito *falta esto*
// - Arreglos globales(hay que ver bien esto)*falta esto*
// - Todas las funciones van en ServicesPro.js solo se importan aca

import React from 'react';
import { useState, useEffect } from "react";
import { saveProducto, updatedProducto } from "../Services/ServicesPro";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const ProductoForm = ({ producto, onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    if (producto) {
      setNombre(producto.nombre || "");
      setPrecio(producto.precio || "");
      setDescripcion(producto.descripcion || "");
      setCategoria(producto.categoria || "");
      setStock(producto.stock || "");
      setImagen(producto.imagen || "");
    }
  }, [producto]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!/^[a-zA-Z\s]+$/.test(nombre)) {
      alert("El nombre no puede contener números ni caracteres especiales.");
      return;
    }
    if (precio < 0) {
      alert("El precio no puede ser negativo.");
      return;
    }
    if (stock < 0) {
      alert("El stock no puede ser negativo.");
      return;
    }

    const productoData = {
      id: producto?.id || Date.now().toString(),
      nombre,
      precio,
      descripcion,
      categoria,
      stock,
      imagen
    };

    if (producto) {
      updatedProducto(productoData);
    } else {
      saveProducto(productoData);
    }

    if (onSubmit) {
      onSubmit(productoData);
    }

    if (!producto) {
      setNombre("");
      setPrecio("");
      setDescripcion("");
      setCategoria("");
      setStock("");
      setImagen("");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card className="p-4 shadow" style={{ width: "100%", maxWidth: "800px" }}>
        <Card.Body>
          <h4 className="mb-4 text-center">{producto ? "Editar Producto" : "Agregar Producto"}</h4>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formImagen">
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control
                    type="text"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                    placeholder="URL de la imagen"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formPrecio">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(Number(e.target.value))}
                    required
                    min="0"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formDescripcion">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formCategoria">
                  <Form.Label>Categoria</Form.Label>
                  <Form.Control
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formStock">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(Number(e.target.value))}
                    required
                    min="0"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button variant="primary" type="submit">
                {producto ? "Actualizar Producto" : "Agregar Producto"}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductoForm;