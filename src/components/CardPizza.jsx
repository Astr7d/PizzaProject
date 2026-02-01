import React from 'react'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p className="card-text">
          <strong>Ingredientes:</strong>
          <br />
          {ingredients.join(", ")}
        </p>

        <p className="card-text fw-bold">Precio: ${price}</p>
        <div className="d-flex gap-2 mt-3">
         <button className="btn btn-white flex-fill">Ver más 👀</button>
         <button className="btn btn-dark flex-fill">Añadir 🛒</button>
        </div>

      </div>
    </div>
  );
};

export default CardPizza;
