import React, { useState } from 'react';
import { pizzaCart } from '../pizzas.js'; // ajusta la ruta si es necesario

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      return updated.filter((item) => item.count > 0);
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="container my-5">
      <h3 className="mb-4 fw-bold">Detalles del pedido:</h3>

      {cart.length === 0 ? (
        <p className="text-center text-muted">El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center mb-4 pb-3 border-bottom"
            >
              <img
                src={item.img}
                alt={item.name}
                className="me-3 rounded"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />

              <div className="flex-grow-1">
                <div className="fw-bold">{item.name}</div>
                <div className="text-muted small">
                  ${item.price.toLocaleString('es-CL')}
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-sm btn-outline-danger p-0"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '0.2rem',      
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>

                <span className="fw-bold mx-3">{item.count}</span>

                <button
                  className="btn btn-sm btn-outline-primary p-0"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '0.2rem',          
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <div className="ms-4 fw-bold text-end" style={{ minWidth: '100px' }}>
                ${(item.price * item.count).toLocaleString('es-CL')}
              </div>
            </div>
          ))}



          {/* Total */}
          <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top">
            <h5 className="mb-0 fw-bold">Total:</h5>
            <h4 className="mb-0 fw-bold text-danger">
              ${total.toLocaleString('es-CL')}
            </h4>
          </div>

          <div className="mt-4">
            <button
              className="btn btn-dark px-5 py-3 fw-bold"
              style={{
                backgroundColor: '#000000',
                borderColor: '#000000',
                color: '#ffffff',
                minWidth: '180px',
              }}
            >
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;