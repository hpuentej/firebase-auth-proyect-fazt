import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Dios, ShowInfo } from "./components/SecretMsg";
import { ToDo } from "./tasks/main";

function App() {
  return (
    <div className="container bg-cyan-800 text-white text-center overflow-hidden mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/creacion"
          element={
            <>
              <Dios />
              <ShowInfo />
            </>
          }
        />
        <Route path="/task" element={<ToDo />} />
      </Routes>
    </div>
  );
}

export default App;
