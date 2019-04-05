import React from "react";
import ReactDOM from "react-dom";
import { LoveCalculator } from "./LoveCalculator";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <blink>
        <h1>Love Calculator</h1>
      </blink>
      <LoveCalculator />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
