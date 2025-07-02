import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import BarraNav from "./assets/Components/BarraNav";
import AppRoutes from "./Routes";
import { getProductos } from "./assets/services/ServicesPro";

function App() {
  // Cargar productos desde localStorage al iniciar
  const [productos, setProductos] = useState(() => getProductos());

  // Cambia el flag “favorito” de un producto y lo persiste en localStorage
  const toggleFavorito = (id) => {
    setProductos((prev) => {
      const nuevosProductos = prev.map((p) =>
        p.id === id ? { ...p, favorito: !p.favorito } : p
      );
      // Guardar en localStorage
      localStorage.setItem('productos_data', JSON.stringify(nuevosProductos));
      return nuevosProductos;
    });
  };

  return (
    <BrowserRouter>
      <BarraNav />
      <div style={{ paddingTop: "70px" }}>
        {/*  Le pasamos todo a las rutas  */}
        <AppRoutes
          productos={productos}
          setProductos={setProductos}
          toggleFavorito={toggleFavorito}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
