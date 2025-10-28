import React, { useState, useEffect } from 'react';
import { Button, Card, Offcanvas } from 'react-bootstrap';

const PapeleraAdmin = ({ userType, setProductos }) => {
  const [mostrar, setMostrar] = useState(false);
  const [eliminados, setEliminados] = useState([]);

  useEffect(() => { // Carga los productos eliminados desde el localStorage
    const data = JSON.parse(localStorage.getItem('productos_eliminados')) || [];
    setEliminados(data);
  }, [mostrar]);

  const restaurarProducto = (id) => { // Restaura un producto eliminado
    const actuales = JSON.parse(localStorage.getItem('productos_data')) || []; // Obtiene los productos actuales
    const nuevoEliminados = eliminados.filter(p => p.id !== id); // Filtra los productos eliminados para quitar el seleccionado
    const restaurado = eliminados.find(p => p.id === id); // Encuentra el producto eliminado que se va a restaurar

    localStorage.setItem('productos_data', JSON.stringify([...actuales, restaurado]));
    localStorage.setItem('productos_eliminados', JSON.stringify(nuevoEliminados));
    setProductos([...actuales, restaurado]);
    setEliminados(nuevoEliminados);
  };

  const eliminarPermanentemente = (id) => { // Elimina el producto de forma permanente
    if (window.confirm("¿Eliminar definitivamente este producto?")) { 
      const nuevoEliminados = eliminados.filter(p => p.id !== id); // Filtra los productos eliminados para quitar el seleccionado
      localStorage.setItem('productos_eliminados', JSON.stringify(nuevoEliminados)); // Actualiza el localStorage
      setEliminados(nuevoEliminados); // Actualiza el estado de eliminados
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
        <img
        src="/papelera.png" //imagen
        alt="Imagen de papelera"
        style={{ width: '30px', height: '30px'}} // Ajusta el tamaño y el espaciado según lo necesario
      />
      </Button>

      <Offcanvas show={mostrar} onHide={() => setMostrar(false)} placement="end"> {/*Panel lateral para la papelera*/}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Productos eliminados</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {eliminados.length === 0 ? (
            <p className="text-muted">No hay productos en la papelera.</p>
          ) : (
            eliminados.map((p) => ( // Mapea los productos eliminados
              <Card key={p.id} className="mb-3 bg-dark text-white">
                <Card.Body>
                  <Card.Title>{p.nombre}</Card.Title>
                  <Card.Text><small>{p.descripcion}</small></Card.Text>
                  <div className="d-flex justify-content-between">
                    <Button variant="success" onClick={() => restaurarProducto(p.id)}> {/* Restaura el producto eliminado */}
                      Restaurar
                    </Button>
                    <Button variant="outline-danger" onClick={() => eliminarPermanentemente(p.id)}> {/* Elimina el producto permanentemente */}
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