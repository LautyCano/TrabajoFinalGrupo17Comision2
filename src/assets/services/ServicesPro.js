const PRODUCTO_STORAGE_KEY = 'productos_data';

// Obtener productos desde localStorage
export const getProductos = () => {
  const productos = localStorage.getItem(PRODUCTO_STORAGE_KEY);
  return productos ? JSON.parse(productos) : [];
};

// Guardar nuevo producto
export const saveProducto = (newProducto) => {
  const productos = getProductos();
  const productoWithId = {
    ...newProducto,
    id: Date.now().toString(),
    favorito: false, 
  };
  productos.push(productoWithId);
  localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(productos));
};

// Inicializar productos precargados si no hay ninguno
export const initializeProducto = () => {
  let productos = getProductos();
  if (productos.length === 0) {
    const initialProductos = [
      { id: '1', nombre: "Memoria Ram-Patriot", precio: 181500, descripcion: "DDR5 32GB (2x16GB) 6800MHz Intel XMP 3.0", categoria: "Componentes-PC", stock: 43, imagen: "/ram.jpg", favorito: false },
      { id: '2', nombre: "Monitor Lenovo", precio: 123849, descripcion: "ThinkVision S22i-30 21.5 pulgadas FHD IPS 75Hz", categoria: "Pantallas", stock: 17, imagen: "/monitor.jpg", favorito: false },
      { id: '3', nombre: "Gabinete Be Quiet!", precio: 145200, descripcion: "PURE BASE 500DX Black ARGB 3x140mm Pure Wings 2 Fans Vidrio Templado USB-C", categoria: "Componentes-PC", stock: 8, imagen: "/gabinete.jpg", favorito: false },
      { id: '4', nombre: "Procesador AMD Ryzen 5", precio: 160030, descripcion: "Ryzen 5 5600G - 4.4GHz Turbo + Wraith Stealth Cooler", categoria: "Componentes-PC", stock: 21, imagen: "/r5.jpg", favorito: false },
      { id: '5', nombre: "Procesador AMD Ryzen 9", precio: 1011243, descripcion: "Ryzen 9 9950X3D 5.7GHz Turbo AM5 No Incluye Cooler", categoria: "Componentes-PC", stock: 14, imagen: "/r9.jpg", favorito: false },
      { id: '6', nombre: "Procesador Intel Core i9", precio: 708483, descripcion: "Core i9 14900K 6.0GHz Turbo Socket 1700 Raptor Lake", categoria: "Componentes-PC", stock: 28, imagen: "/corei9.jpg", favorito: false },
      { id: '7', nombre: "Procesador Intel Core i3", precio: 165900, descripcion: "Core i3 12100 4.3GHz Socket 1700 Alder Lake", categoria: "Componentes-PC", stock: 22, imagen: "/corei3.jpg", favorito: false },
      { id: '8', nombre: "Mother ASUS ROG STRIX", precio: 580950, descripcion: "Z890-A GAMING WIFI LGA1851", categoria: "Componentes-PC", stock: 56, imagen: "/asusrogz890.jpg", favorito: false },
      { id: '9', nombre: "Placa de Video Asrock", precio: 1043217, descripcion: "Radeon RX 9070 XT 16GB GDDR6 Steel Legend Dark", categoria: "Componentes-PC", stock: 31, imagen: "/radeon9070.jpg", favorito: false },
      { id: '10', nombre: "Auriculares Logitech G335", precio: 108990, descripcion: "White PC/XBOX/PS", categoria: "Componentes-PC", stock: 14, imagen: "/Auris.jpg", favorito: false },
      { id: '11', nombre: "Notebook HP 15", precio: 551860, descripcion: "FC0037WM 15.6 pulgadas R5-7520U 8GB SSD 256GB FHD Win11", categoria: "Componentes-PC", stock: 45, imagen: "/notebook.jpg", favorito: false },
    ];
    localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(initialProductos));
    console.log('Productos precargados inicializados.');
  }
};

// Eliminar producto
export const deleteProducto = (id) => {
  const productos = getProductos();
  const updatedProductos = productos.filter((producto) => producto.id !== id);
  localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(updatedProductos));
};

// Actualizar producto
export const updatedProducto = (updatedProducto) => {
  const productos = getProductos();
  const index = productos.findIndex((p) => p.id === updatedProducto.id);
  if (index !== -1) {
    productos[index] = updatedProducto;
    localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(productos));
  }
};

// Marcar/desmarcar favorito
export const toggleFavorito = (productoId) => {
  let products = getProductos();
  const index = products.findIndex(p => p.id === productoId); 

  if (index !== -1) {
    products[index].favorito = !products[index].favorito;
    localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(products));
    console.log(`Producto "${products[index].nombre}" ahora es favorito: ${products[index].favorito}`);
  } else {
    console.error("Producto no encontrado para toggle favorito:", productoId);
  }
};
