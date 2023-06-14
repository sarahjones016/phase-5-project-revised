import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Portal from "./Portal";
import WaterKnowledge from "./WaterKnowledge";
import Navbar from "./Navbar";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


return (
  <div>
    <Navbar setUser={setUser} user={user} />
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/portal' element={<Portal user={user}/>}></Route>
      <Route path='/water-knowledge' element={<WaterKnowledge />}></Route>
    </Routes>
  </div>
)
}

export default App;
