import React, { useState, useEffect } from 'react';
import { Button, Card, Offcanvas } from 'react-bootstrap';

const PapeleraAdmin = ({ userType, setProductos }) => {
  const [mostrar, setMostrar] = useState(false);
  const [eliminados, setEliminados] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('productos_eliminados')) || [];
    setEliminados(data);
  }, [mostrar]);

  const restaurarProducto = (id) => {
    const actuales = JSON.parse(localStorage.getItem('productos_data')) || [];
    const nuevoEliminados = eliminados.filter(p => p.id !== id);
    const restaurado = eliminados.find(p => p.id === id);

    localStorage.setItem('productos_data', JSON.stringify([...actuales, restaurado]));
    localStorage.setItem('productos_eliminados', JSON.stringify(nuevoEliminados));
    setProductos([...actuales, restaurado]);
    setEliminados(nuevoEliminados);
  };

  const eliminarPermanentemente = (id) => {
    if (window.confirm("¿Eliminar definitivamente este producto?")) {
      const nuevoEliminados = eliminados.filter(p => p.id !== id);
      localStorage.setItem('productos_eliminados', JSON.stringify(nuevoEliminados));
      setEliminados(nuevoEliminados);
    }
  };

  if (userType !== 'admin') return null;

  return (
    <>
      <Button
        onClick={() => setMostrar(true)}
        variant="danger"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '8px',
          zIndex: 1000
        }}
      >
        Papelera
      </Button>

      <Offcanvas show={mostrar} onHide={() => setMostrar(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Productos eliminados</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {eliminados.length === 0 ? (
            <p className="text-muted">No hay productos en la papelera.</p>
          ) : (
            eliminados.map((p) => (
              <Card key={p.id} className="mb-3 bg-dark text-white">
                <Card.Body>
                  <Card.Title>{p.nombre}</Card.Title>
                  <Card.Text><small>{p.descripcion}</small></Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="success" onClick={() => restaurarProducto(p.id)}>
                      Restaurar
                    </Button>
                    <Button variant="outline-danger" onClick={() => eliminarPermanentemente(p.id)}>
                      Eliminar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default PapeleraAdmin;