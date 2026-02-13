import React from 'react'
import Header from '../components/Header.jsx'
import CardPizza from '../components/CardPizza.jsx'
import {pizzas} from '../pizzas.js'

const Home = () => {
  return (
    <div>
      <Header />

      <div className="container my-4">
        <h2 className="text-center mb-4">Nuestras Pizzas</h2>

            <div className='row g-4 justify-content-center'>
              {pizzas.map((pizza) => (
                <div className='col-md-4' key={pizza.id}>
                  <CardPizza 
                    name={pizza.name}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    img={pizza.img}
                     />
                </div>
              ))}
            </div>
        
      </div>
    </div>
  )
}

export default Home
