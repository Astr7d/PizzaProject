import React, {useEffect, useState} from 'react'

const CardPizza = ({ name, price, ingredients, img }) => {
  {/*const [pizza, setPizza] = useState([]);
  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
      const url = 'http://localhost:5000/api/pizzas';
      const response = await fetch(url);
      const data = await response.json();
      // setear constante donde va a guardarse lo obtenido

      setPizza(data);
  }
*/}

  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p className="card-text">
          <strong>Ingredientes:</strong>
          <br />

          <ul className="list-unstyled ms-3 mt-1" style={{ fontSize: "0.95rem" }}>
            {ingredients.map((ingrediente, index) => (
              <li key={index}>
                • {ingrediente}
              </li>
            ))}
          </ul>
               
          {/* {ingredients.join(", ")} */}
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
