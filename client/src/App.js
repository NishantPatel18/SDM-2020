import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Hello</code>
          <h3>SHERIN WAS HERE 05/09</h3>
          <h3>NISHANT WAS HERE</h3>
          <h3>JESPHILMAR WAS HERE</h3>
          <h3>BRIAN WAS HERE</h3>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;