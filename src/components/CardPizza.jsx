import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card shadow-sm h-100">

      {/* Imagen */}
      <img
        src={pizza.img}
        alt={pizza.name}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "cover",
          width: "100%",
        }}
      />

      <div className="card-body d-flex flex-column">

        {/* Nombre */}
        <h5 className="fw-bold text-capitalize text-start mb-3">
          Pizza {pizza.name}
        </h5>

        {/* Línea separadora */}
        <hr />

        {/* Ingredientes */}
        <p className="fw-bold mb-1">Ingredientes:</p>
        <ul className="list-unstyled small text-muted mb-3">
            🍕 {pizza.ingredients.join(", ")}
        </ul>

        {/* Línea separadora */}
        <hr />

        {/* Precio */}
        <h4 className="fw-bold text-center mb-3">
          Precio: ${pizza.price.toLocaleString("es-CL")}
        </h4>

        {/* Botones lado a lado */}
        <div className="d-flex gap-2 mt-auto">
          <Link
            to={`/pizza/${pizza.id}`}
            className="btn btn-outline-primary w-50"
          >
            Ver Más 👀
          </Link>

          <button
            className="btn btn-dark w-50"
            onClick={() => addToCart(pizza)}
          >
            Añadir 🛒
          </button>
        </div>

      </div>
    </div>
  );
};

export default CardPizza;