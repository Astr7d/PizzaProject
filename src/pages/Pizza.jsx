import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); // ← obtenemos el id dinámico
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPizza = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al obtener la pizza:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPizza();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;
  if (!pizza) return <p>No se encontró la pizza solicitada.</p>;

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4 text-capitalize">{pizza.name}</h2>

      <div className="row">
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h4 className="fw-bold mt-3">Ingredientes:</h4>
          <ul>
            {pizza.ingredients.map((ing, i) => (
              <li key={i}>🍕 {ing}</li>
            ))}
          </ul>

          <p className="mt-3">{pizza.desc}</p>

          <h3 className="fw-bold mt-4 text-danger">
            ${pizza.price.toLocaleString("es-CL")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Pizza;