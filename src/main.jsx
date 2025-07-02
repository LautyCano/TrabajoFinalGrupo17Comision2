import React, { StrictMode } from 'react'; // Necesitas importar StrictMode
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render( // Cambiado de createRoot a ReactDOM.createRoot
  <StrictMode>
    <App />
  </StrictMode>,
);