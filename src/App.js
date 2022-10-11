import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";

function App() {  
  return (
    <div className="bg-slate-500 h-screen text-white flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
