import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import BarraNav from "./assets/components/BarraNav";
import AppRoutes from "./Routes";
import { getProductos, initializeProducto } from "./assets/services/ServicesPro";
import PapeleraAdmin from "./assets/components/Papelera";

function App() {
  // Estado para el tipo de usuario
  const [userType, setUserType] = useState("guest");

  // Estado de productos
  const [productos, setProductos] = useState(() => getProductos());

  // Inicialización de productos
  useEffect(() => {
    initializeProducto();
    setProductos(getProductos());
  }, []);

  // Función para alternar favoritos
  const toggleFavorito = (id) => {
    setProductos((prev) => {
      const nuevosProductos = prev.map((p) =>
        p.id === id ? { ...p, favorito: !p.favorito } : p
      );
      localStorage.setItem("productos_data", JSON.stringify(nuevosProductos));
      return nuevosProductos;
    });
  };

  // Funciones de login/logout
  const login = (email, password) => {
    if (email === "lucasfer@gmail.com" && password === "lucas1234") {
      setUserType("admin");
    } else {
      setUserType("user");
    }
  };

  const logout = () => {
    setUserType("guest");
  };

  return (
    <BrowserRouter>
      <BarraNav userType={userType} login={login} logout={logout} />
      <div style={{ paddingTop: "70px" }}>
        <AppRoutes
          productos={productos}
          setProductos={setProductos}
          toggleFavorito={toggleFavorito}
          userType={userType}
        />
      </div>
      <PapeleraAdmin userType={userType} setProductos={setProductos} />
    </BrowserRouter>
  );
}

export default App;
