import React from "react";
import { BrowserRouter } from "react-router-dom";
import BarraNav from "./assets/Components/BarraNav";
import AppRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <BarraNav />
      <div style={{paddingTop: "70"}}>
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
