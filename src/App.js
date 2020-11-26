import "./App.css";
import React, { useState } from "react";

function App() {
  const [isLit, setLit] = useState(true);
  const [temp, setTemp] = useState(22);
  return (
    <div className={`room ${isLit ? "lit" : "dark"}`}>
      <h1>The room is {isLit ? "lit" : "dark"}</h1>
      <h1>The temperature of the room is {temp}</h1>
      <div>
        <button onClick={() => setLit(true)}>Switch ON</button>
        <button onClick={() => setLit(false)}>Switch OFF</button>
      </div>
      <div>
        <button onClick={() => setTemp(temp - 1)}>Decrease Temperature</button>
        <button onClick={() => setTemp(temp + 1)}>Increase Temperature</button>
      </div>
    </div>
  );
}

export default App;
