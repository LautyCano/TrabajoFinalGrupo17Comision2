//Mostarar los favoritos del usuario
export default function Favoritos({ favoritos }) {
  return (
    <div className="contenedor-favoritos">
      <h2>Mis Productos Favoritos</h2>
      {favoritos.length === 0 ? (
        <p>No hay productos favoritos.</p>
      ) : (
        <ul>
          {favoritos.map(producto => (
            <li key={producto.id}>
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}