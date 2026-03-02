import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    obtenerPizza();
  }, []);

  const obtenerPizza = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      console.log("Pizza recibida:", data);
      setPizza(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    }
  };

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="container my-4">
      <div className="card p-4 shadow">
        <img
          src={pizza.img}
          alt={pizza.name}
          className="img-fluid rounded mb-3"
        />

        <h2 className="text-capitalize">{pizza.name}</h2>
        <p className="text-muted">{pizza.desc}</p>

        <h4>Ingredientes:</h4>
        <ul>
          {pizza.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
          ))}
        </ul>

        <h3 className="mt-3">Precio: ${pizza.price}</h3>

        <button className="btn btn-primary mt-3">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default Pizza;