import React from 'react';
import './App.css';
import foodData from './Fooddata';


function App() {
  return (
    <div className="App">
      <h1>Food Menu</h1>
      <div className="food-container">

        {foodData.map(food => (

          <div key={food.id} className="food-card">
            <img src={food.image} alt={food.name} className="food-image" />
            <h2>{food.name}</h2>
            <p>{food.description}</p>
            <p>${food.price.toFixed(2)}</p>
          </div>

        ))}
      </div>
    </div>
  );
}

export default App;
