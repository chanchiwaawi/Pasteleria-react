import { useState, useEffect } from "react";

function Carrito() {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];
    setProductosEnCarrito(carritoLS);
  }, []);

  // Actualizar total y localStorage cada vez que cambia el carrito
  useEffect(() => {
    const nuevoTotal = productosEnCarrito.reduce(
      (acc, producto) => acc + producto.precio * producto.cantidad,
      0
    );
    setTotal(nuevoTotal);
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
  }, [productosEnCarrito]);

  const incrementarCantidad = (id) => {
    setProductosEnCarrito(prev =>
      prev.map(p =>
        p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
      )
    );
  };

  const decrementarCantidad = (id) => {
    setProductosEnCarrito(prev =>
      prev.flatMap(p => {
        if (p.id === id) {
          if (p.cantidad > 1) return { ...p, cantidad: p.cantidad - 1 };
          if (window.confirm(`¿Quieres eliminar "${p.titulo}" del carrito?`)) return [];
          return p;
        }
        return p;
      })
    );
  };

  const eliminarProducto = (id) => {
    setProductosEnCarrito(prev =>
      prev.filter(p => p.id !== id)
    );
  };

  const vaciarCarrito = () => {
    if (window.confirm("¿Seguro que deseas vaciar el carrito?")) {
      setProductosEnCarrito([]);
    }
  };

  const comprarAhora = () => {
    if (productosEnCarrito.length === 0) {
      alert("El carrito está vacío");
      return;
    }
    if (window.confirm("¿Confirmas la compra?")) {
      setProductosEnCarrito([]);
      setCompraFinalizada(true);
    }
  };

  return (
    <main>
      <h2 className="titulo-principal">Carrito</h2>
      <div className="contenedor-carrito">
        {productosEnCarrito.length === 0 && !compraFinalizada && (
          <p className="carrito-vacio">
            Tu carrito está vacío <i className="bi bi-emoji-frown"></i>
          </p>
        )}

        {productosEnCarrito.length > 0 && (
          <div className="carrito-productos">
            {productosEnCarrito.map(producto => (
              <div key={producto.id} className="carrito-producto">
                <img
                  className="carrito-producto-imagen"
                  src={producto.imagen}
                  alt={producto.titulo}
                />
                <div className="carrito-producto-titulo">
                  <small>Título</small>
                  <h3>{producto.titulo}</h3>
                </div>
                <div className="carrito-producto-cantidad">
                  <small>Cantidad</small>
                  <div className="carrito-producto-cantidad-controles">
                    <button onClick={() => decrementarCantidad(producto.id)}>-</button>
                    <p>{producto.cantidad}</p>
                    <button onClick={() => incrementarCantidad(producto.id)}>+</button>
                  </div>
                </div>
                <div className="carrito-producto-precio">
                  <small>Precio</small>
                  <p>${producto.precio.toLocaleString()}</p>
                </div>
                <div className="carrito-producto-subtotal">
                  <small>Subtotal</small>
                  <p>${(producto.precio * producto.cantidad).toLocaleString()}</p>
                </div>
                <button
                  onClick={() => eliminarProducto(producto.id)}
                  className="carrito-producto-eliminar"
                  title="Eliminar producto completo"
                >
                  <i className="bi bi-trash3"></i>
                </button>
              </div>
            ))}
          </div>
        )}

        {productosEnCarrito.length > 0 && (
          <div className="carrito-acciones">
            <div className="carrito-acciones-izquierda">
              <button onClick={vaciarCarrito} className="carrito-acciones-vaciar">
                Vaciar carrito
              </button>
            </div>
            <div className="carrito-acciones-derecha">
              <div className="carrito-acciones-total">
                <p>Total:</p>
                <p>${total.toLocaleString()}</p>
              </div>
              <button onClick={comprarAhora} className="carrito-acciones-comprar">
                Comprar ahora
              </button>
            </div>
          </div>
        )}

        {compraFinalizada && (
          <p className="carrito-comprado">
            ¡Muchas gracias por tu compra! <i className="bi bi-emoji-kiss"></i>
          </p>
        )}
      </div>
    </main>
  );
}

export default Carrito;

