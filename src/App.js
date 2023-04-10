import React, { useState } from "react";

import "./index.css";

function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("No hay mensage");

  const calcBmi = (e) => {
    e.preventDefault();
    if (peso === 0 || altura === 0) {
      alert("Los campos del formulario son obligatorios");
    } else {
      let alturauno = altura / 100;
      let bmi = peso / (alturauno * alturauno);
      console.log(bmi);
      setBmi(bmi.toFixed(2));

      if (bmi < 25) {
        setMessage("estas un muy delgado!");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("estas en buena condicion fisica!");
      } else if (bmi > 30) {
        setMessage("Estas un poco pasado de peso!");
      }
    }
  };

  let imgSrc = "";

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = require("../src/asset/flaco.jpg");
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require("../src/asset/flaco.jpg");
    } else {
      imgSrc = require("../src/asset/gordo.jpg");
    }
  }

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h3 classname="center"> Calcula Tu IMC </h3>
        <form onSubmit={calcBmi}>
          <div>
            <label>Peso (kg)</label>
            <input
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Altura (cm)</label>
            <input
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="btn" type="submit">
              Calcular
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reiniciar
            </button>
          </div>
        </form>
        <div className="center">
          <h3>TU IMC ES:{bmi}</h3>
          <p>{message}</p>
        </div>
        <div className="img-container">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
