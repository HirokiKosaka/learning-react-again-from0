import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import State from "./bgColorChangerUsingState/State";
import ColorChanger from "./bgColorChangerUsingContext/ColorChanger";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state" element={<State />} />
          <Route path="/context" element={<ColorChanger />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
