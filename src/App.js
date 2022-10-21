import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Dios, ShowInfo } from "./components/SecretMsg";
import { ToDo } from "./tasks/main";
import { Ejemplo } from "./estudioConJonmircha/ejemploContador";
import { Ejemplo2 } from "./estudioConJonmircha/cicloDeVida";
import { TutorialReact0 } from "./estudioConJonmircha/tutorialReact0";
import { Contador } from "./estudioConJonmircha/contadorHook";
import { FilterableProductTable } from "./estudioConJonmircha/pensandoEnReact/filterableProductTable";
import dataProducts from "./estudioConJonmircha/assets/dataProducts.json";
import {Calculator} from "./estudioConJonmircha/calculadorTemperatura/calculatorMain";

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
        <Route path="/practicando" element={<Ejemplo />} />
        <Route path="/ejemplo2" element={<Ejemplo2 />} />
        <Route path="/tutorialReact0" element={<TutorialReact0 />} />
        <Route path="/contadorHook" element={<Contador />} />
        <Route
          path="/mock"
          element={<FilterableProductTable dataProducts={dataProducts} />}
        />
        <Route path="/calctemp" element={<Calculator/>}/>
      </Routes>
    </div>
  );
}

export default App;
