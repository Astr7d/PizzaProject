import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card shadow-sm">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title fw-bold">{pizza.name}</h5>

        <ul className="list-unstyled small text-muted">
          {pizza.ingredients.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>

        <h4 className="fw-bold text-center mt-3">
          ${pizza.price.toLocaleString("es-CL")}
        </h4>

        <button
          className="btn btn-dark w-100 mt-3"
          onClick={() => addToCart(pizza)}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default CardPizza;