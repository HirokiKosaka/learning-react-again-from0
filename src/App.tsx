import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import State from "./state/State";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state" element={<State />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
