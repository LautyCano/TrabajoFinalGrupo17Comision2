const PRODUCTO_STORAGE_KEY = 'productos_data';

export const getProductos = () => {
  const productos = localStorage.getItem(PRODUCTO_STORAGE_KEY);
  return productos ? JSON.parse(productos) : [];
};

// Función para guardar un nuevo producto (añadiéndolo a la lista existente)
export const saveProducto = (newProducto) => {
  const productos = getProductos(); // Obtener la lista actual de productos

  // Aseguramos que cada producto tenga el campo favorito en false por defecto
  const productoWithId = { ...newProducto, id: Date.now().toString(), favorito: false };
  productos.push(productoWithId); // Añadir el nuevo producto a la lista
  localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(productos));
};

// Función para inicializar productos (si no existen)
export const initializeProducto = () => {
  let productos = getProductos(); // Comprobar si ya hay productos
  if (productos.length === 0) { // Si no hay productos, precargamos
    const initialProductos = [
      { id: '1', nombre: "Memoria Ram-Patriot", precio: 181500, descripcion: "DDR5 32GB (2x16GB) 6800MHz Intel XMP 3.0", categoria: "Componentes-PC", stock: 43 },
      { id: '2', nombre: "Monitor Lenovo", precio: 123849, descripcion: " ThinkVision S22i-30 21.5 pulgadas FHD IPS 75Hz ", categoria: "Pantallas", stock: 17 },
      { id: '3', nombre: "Gabinete Be Quiet! ", precio: 145200, descripcion: " PURE BASE 500DX Black ARGB 3x140mm Pure Wings 2 Fans Vidrio Templado USB-C ", categoria: "Componentes-Pc", stock: 8 },
      { id: '4', nombre: "Procesador AMD Ryzen 5", precio: 160.030, descripcion: "Ryzen 5 5600G - 4.4GHz Turbo + Wraith Stealth Cooler", categoria: "Componentes-PC", stock: 21 },
      { id: '5', nombre: "Procesador AMD Ryzen 9", precio: 1011243, descripcion: " Ryzen 9 9950X3D 5.7GHz Turbo AM5 No Incluye Cooler", categoria: "Componentes-PC", stock: 14 },
      { id: '6', nombre: "Procesador Intel Core i9", precio: 708483, descripcion: "Core i9 14900K 6.0GHz Turbo Socket 1700 Raptor Lake", categoria: "Componentes-PC", stock: 28 },
      { id: '7', nombre: "Procesador Intel Core i3", precio: 165900, descripcion: "Core i3 12100 4.3GHz Socket 1700 Alder Lake", categoria: "Componentes-PC", stock: 22 },
      { id: '8', nombre: "Mother ASUS ROG STRIX", precio: 580950, descripcion: "Z890-A GAMING WIFI LGA1851", categoria: "Componentes-PC", stock: 56 },
      { id: '9', nombre: "Placa de Video Asrock", precio: 1043217, descripcion: "Radeon RX 9070 XT 16GB GDDR6 Steel Legend Dark", categoria: "Componentes-PC", stock: 31 },
      { id: '10', nombre: "Auriculares Logitech G335", precio: 108990, descripcion: "White PC/XBOX/PS", categoria: "Componentes-PC", stock: 14 },
      { id: '11', nombre: "Notebook HP 15", precio: 551860, descripcion: "FC0037WM 15.6 pulgadas R5-7520U 8GB SSD 256GB FHD Win11", categoria: "Componentes-PC", stock: 45 },
    ];
    localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(initialProductos));
    console.log('Productos precargados inicializados.');
  }
};
// Función para eliminar un producto por su ID
export const deleteProducto = (id) => {
  const productos = getProductos(); // Obtener todos los productos
  const updatedProductos = productos.filter((producto) => producto.id !== id);
  localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(updatedProductos));
};
//Funcion para actualizar producto
export const updatedProducto = (updatedProducto) => {
  const productos = getProductos();
  const index = productos.findIndex((p) => p.id === updatedProducto.id);

  if (index !== -1) {
    productos[index] = updatedProducto;
    localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(productos));
  }
};