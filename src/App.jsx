import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import BarraNav from "./assets/Components/BarraNav";
import AppRoutes from "./Routes";
import { getProductos, initializeProducto } from "./assets/Services/ServicesPro";

function App() {
  const [productos, setProductos] = useState(() => getProductos());

  useEffect(() => {
    initializeProducto();
    setProductos(getProductos()); // actualiza el estado después de inicializar
  }, []);

  const toggleFavorito = (id) => {
    setProductos((prev) => {
      const nuevosProductos = prev.map((p) =>
        p.id === id ? { ...p, favorito: !p.favorito } : p
      );
      localStorage.setItem("productos_data", JSON.stringify(nuevosProductos));
      return nuevosProductos;
    });
  };

  return (
    <BrowserRouter>
      <BarraNav />
      <div style={{ paddingTop: "70px" }}>
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