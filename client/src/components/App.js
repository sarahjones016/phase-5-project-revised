import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Portal from "./Portal";
import WaterKnowledge from "./WaterKnowledge";

function App() {

return (
  <div>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/portal' element={<Portal />}></Route>
      <Route path='/water-knowledge' element={<WaterKnowledge />}></Route>
    </Routes>
  </div>
)
}

export default App;
