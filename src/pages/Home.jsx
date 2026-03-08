import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import CardPizza from "../components/CardPizza.jsx";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();

      console.log("DATA RECIBIDA:", data);

      setPizzas(data);
    } catch (error) {
      console.error("Error al consultar la API:", error);
    }
  };
  
  return (
    <div>
      <Header />

      <div className="container my-4">
        <h2 className="text-center mb-4">Nuestras Pizzas</h2>

        <div className="row g-4 justify-content-center">
          {pizzas.map((pizza) => (
            <div className="col-md-4" key={pizza.id}>
              <CardPizza pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;