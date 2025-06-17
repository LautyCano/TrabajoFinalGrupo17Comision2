const PRODUCTO_STORAGE_KEY = 'productos_data';

export const getProductos = () => {
  const productos = localStorage.getItem(PRODUCTO_STORAGE_KEY);
  return productos ? JSON.parse(productos) : [];
};

// Función para guardar un nuevo producto (añadiéndolo a la lista existente)
export const saveProducto = (newProducto) => {
  const productos = getProductos(); // Obtener la lista actual de productos

  const productoWithId = { ...newProducto, id: Date.now().toString() };
  productos.push(productoWithId); // Añadir el nuevo producto a la lista
  localStorage.setItem(PRODUCTO_STORAGE_KEY, JSON.stringify(productos));
};

// Función para inicializar productos (si no existen)
export const initializeProducto = () => {
  let productos = getProductos(); // Comprobar si ya hay productos
  if (productos.length === 0) { // Si no hay productos, precargamos
    const initialProductos = [
      { id: '1', nombre: "Producto 1", precio: 100, descripcion: "Descripción del Producto 1", categoria: "Categoría 1", stock: 10 },
      { id: '2', nombre: "Producto 2", precio: 200, descripcion: "Descripción del Producto 2", categoria: "Categoría 2", stock: 20 },
      { id: '3', nombre: "Producto 3", precio: 300, descripcion: "Descripción del Producto 3", categoria: "Categoría 3", stock: 30 },
      { id: '4', nombre: "Producto 4", precio: 400, descripcion: "Descripción del Producto 4", categoria: "Categoría 4", stock: 40 },
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