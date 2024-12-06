import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature =() =>{
    if (temperatureValue === 37) return;
    const newTempeature = temperatureValue + 1;

    if(newTempeature >= 27) {
      setTemperatureColor('hot');
    }
    setTemperatureValue(newTempeature);
  };

  const decreaseTemperature =() =>{
    if(temperatureValue === 0) return;
    const newTempeature = temperatureValue -1;

    if(newTempeature < 27) {
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTempeature)
  };


  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}` }>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button 
        onClick={()=> increaseTemperature()}>+</button>
        <button 
        onClick={()=> decreaseTemperature()}>-</button>
      </div>


    </div>
  );
}

export default App;